require("dotenv").config();
const { PORT } = process.env;

// require express for server
const express = require("express");

const blogRoutes = require("./routes/blogs");

// create a new express application
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/blogs", blogRoutes);

// start listening on port 3000
app.listen(PORT, () => {
  console.log("Server is started on port", PORT);
});
