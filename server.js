// -Dotenv-
import * as dotenv from "dotenv";
dotenv.config();
// -Express-
import express from "express";
// -Morgan-
import morgan from "morgan";
const app = express();
// -Mongoose-
import mongoose from "mongoose";
// -Routers-
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
// -Middleware-
import errorHandleMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticatedUser } from "./middleware/authMiddleware.js";
// -Cookies-
import cookieParser from "cookie-parser";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.use("/api/v1/jobs", authenticatedUser, jobRouter);
app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not found" });
});

app.use(errorHandleMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  });
} catch (err) {
  console.log(err);
  process.exit(1);
}
