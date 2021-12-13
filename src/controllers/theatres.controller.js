const express = require("express");
const router = express.Router();
const Theatres = require("../models/theatres.model");
router.post("/", async (req, res) => {
  try {
    const newmovie = await Theatres.create(req.body);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/", async (req, res) => {
  try {
    const newmovie = await Theatres.find().lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const newmovie = await Theatres.findById(req.params.id).lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const newmovie = await Theatres.findByIdAndUpdate(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const newmovie = await Theatres.findByIdAndDelete(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
module.exports = router;
