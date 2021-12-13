const User = require("../models/user.model");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const newToken = (user) => {
  return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};
const express = require("express");
const router = express.Router();
const fs = require("fs");
const upload = require("../middlewares/upload");
const path = require("path");
router.post("/signup", upload.single("profile_photo_url"), async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean().exec();
    if (user)
      return res.status(400).json({
        message: "Please sign in with another user",
        Status: "Failed",
      });
    const newuser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      profile_photo_url: req.file.path,
      roles: req.body.roles,
    });
    if (newuser.roles == "adult" || newuser.roles == "old") {
    } else {
      return res.status(400).json({
        message: "you are not authorised please select role",
        Status: "Failed",
      });
    }
    const token = newToken(newuser);
    return res.status(500).json({ newuser, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).lean().exec();
    if (!user)
      return res.status(400).json({
        message: "Please provide correct email or password",
        Status: "Failed",
      });
    const match = await user.checkPassword(req.body.password);
    if (!match)
      return res.status(400).json({
        message: "Please provide correct password",
        Status: "Failed",
      });
    const token = newToken(user);
    return res.status(500).json({ user, token });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

module.exports = router;
