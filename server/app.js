require("dotenv").config();
const { PORT } = process.env;

// require express for server
const express = require("express");

// create a new express application
const app = express();

// different types of requests based on the http methods
app.get("/", (req, res) => {
  res.send("This is a GET request");
});

app.post("/", (req, res) => {
  res.send("This is a POST request");
});

app.put("/", (req, res) => {
  res.send("This is a PUT request");
});

app.delete("/", (req, res) => {
  res.send("This is a DELETE request");
});

// start listening on port 3000
app.listen(PORT, () => {
  console.log("Server is started on port", PORT);
});
