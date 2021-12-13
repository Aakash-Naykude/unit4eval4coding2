const express = require("express");
const router = express.Router();
const Show = require("../models/shows.model");
router.post("/", async (req, res) => {
  try {
    const newmovie = await Show.create(req.body);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/", async (req, res) => {
  try {
    const newmovie = await Show.find().populate("movie").lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/:nearest", async (req, res) => {
  try {
    const newmovie = await Show.find().populate("movie").lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const newmovie = await Show.findById(req.params.id).lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const newmovie = await Show.findByIdAndUpdate(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const newmovie = await Show.findByIdAndDelete(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
module.exports = router;
