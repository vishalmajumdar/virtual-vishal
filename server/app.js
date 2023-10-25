require("dotenv").config();
const { PORT, MONGODB_URI } = process.env;
let dbConnected = false;

// require express for server
const express = require("express");
const cors = require("cors");

// require mongoose for MongoDB
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blogs");
const userRoutes = require("./routes/users");

// create a new express application
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/blogs", blogRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ dbConnected });
});

// connect database
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Database Connected");
    dbConnected = true;
    // start listening on port 3000 only when database connects
    app.listen(PORT, () => {
      console.log("Connected to DB and listening on port", PORT);
    });
  })
  .catch((err) => console.log(err));
