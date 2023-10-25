const express = require("express");
const { signup, signin } = require("../controllers/userController");

const router = express.Router();

// POST a new user
router.post("/signup", signup);

// POST a new user
router.post("/signin", signin);

module.exports = router;
