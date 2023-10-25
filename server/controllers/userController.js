require("dotenv").config();
const { JWT_SECRET } = process.env;

const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// signup the user
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  // check email exists or not
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ msg: "Email already registered" });

  // if not then hash the password to save in database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

// signin the user
const signin = async (req, res) => {
  const { email, password } = req.body;

  // check email exists or not
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Email not registered" });

  // else verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid)
    return res.status(400).json({ msg: "Invalid credentials" });

  // if password is correct generate jwt
  const token = jwt.sign({ id: user._id }, JWT_SECRET);

  return res.json({ token, userID: user._id, msg: "User Logged In" });
};

module.exports = { signup, signin };
