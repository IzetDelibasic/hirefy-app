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
import userRouter from "./routes/userRouter.js";
// -Middleware-
import errorHandleMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
// -Cookies-
import cookieParser from "cookie-parser";
// -Cors-
import cors from "cors";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "Test route" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
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
