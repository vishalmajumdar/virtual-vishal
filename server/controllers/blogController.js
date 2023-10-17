const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

// get all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

// get a blog
const getBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "Wrong ID" });

  const blog = await Blog.findById(id);

  !blog
    ? res.status(400).json({ error: "No such blog" })
    : res.status(200).json(blog);
};

// create a blog
const createBlog = async (req, res) => {
  const { title, body } = req.body;
  try {
    const blog = await Blog.create({
      title,
      body,
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// delete the blog
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "Wrong ID" });

  const blog = await Blog.findByIdAndDelete(id);
  !blog
    ? res.status(400).json({ error: "No such blog" })
    : res.status(200).json(blog);
};

// update the blog
const updateBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "Wrong ID" });

  const blog = await Blog.findByIdAndUpdate(id, req.body);
  !blog
    ? res.status(400).json({ error: "No such blog" })
    : res.status(200).json(blog);
  //   res.status(200).json(req.body);
};

module.exports = { getBlogs, getBlog, createBlog, deleteBlog, updateBlog };
