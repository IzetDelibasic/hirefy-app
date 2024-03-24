import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
const app = express();
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "Apple", position: "Front-End" },
  { id: nanoid(), company: "Google", position: "Back-End" },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "Data recieved", data: req.body });
});

app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
