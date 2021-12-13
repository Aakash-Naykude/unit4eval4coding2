const express = require("express");
const router = express.Router();
const Screens = require("../models/screens.model");
router.post("/", async (req, res) => {
  try {
    const newmovie = await Screens.create(req.body);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/", async (req, res) => {
  try {
    const newmovie = await Screens.find().lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const newmovie = await Screens.findById(req.params.id).lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/actor/:id", async (req, res) => {
  try {
    const newmovie = await Screens.find(req.params.id).lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const newmovie = await Screens.findByIdAndUpdate(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const newmovie = await Screens.findByIdAndDelete(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
module.exports = router;
