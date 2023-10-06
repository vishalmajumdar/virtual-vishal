// require express for server
const express = require("express");

// create a new express application
const app = express();

// start listening on port 3000
app.listen(3000, () => {
  console.log("Server is started on port 3000");
});

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
