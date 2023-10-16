const express = require("express");

const router = express.Router();

// GET all blogs
router.get("/", (req, res) => {
  res.json({ msg: "Get All Blogs" });
});

// GET a single blog
router.get("/:id", (req, res) => {
  id = req.params.id;
  res.json({ msg: `Get Blog No. ${id}` });
});

// POST a new blog
router.post("/", (req, res) => {
  res.json({ msg: "Create Blog" });
});

// DELETE
router.delete("/:id", (req, res) => {
  id = req.params.id;
  res.json({ msg: `Delete Blog No. ${id}` });
});

// UPDATE the blog
router.patch("/:id", (req, res) => {
  id = req.params.id;
  res.json({ msg: `Update Blog No. ${id}` });
});

module.exports = router;
