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

// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// CREATE JOBS
app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ msg: "Please provide company and position" });
    return;
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
});

// GET SINGLE JOB
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `No job with id: ${id}` });
  }
  res.status(200).json({ job });
});

// EDIT JOB
app.patch("/api/v1/jobs/:id", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ msg: "Please probide company and position!" });
    return;
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `No job with id: ${id}` });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "Job modified: ", job });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
