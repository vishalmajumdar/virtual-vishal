const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
} = require("../controllers/blogController");

const router = express.Router();

// GET all blogs
router.get("/", getBlogs);

// GET a single blog
router.get("/:id", getBlog);

// POST a new blog
router.post("/", createBlog);

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
