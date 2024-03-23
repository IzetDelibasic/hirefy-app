import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.listen(5100, () => {
  console.log("Server is running");
});
