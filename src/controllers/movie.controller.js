const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const path = require("path");
const Movie = require("../models/movie.models");
const fs = require("fs");
router.post("/", upload.single("poster_url"), async (req, res) => {
  console.log()
  try {
    const newmovie = await Movie.create({
      name: req.body.name,
      actors: req.body.actors,
      languages: req.body.languages,
      directors: req.body.directors,
      poster_url: req.file.path,
    });
    console.log(newmovie)
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/", async (req, res) => {
  try {
    const newmovie = await Movie.find().lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const newmovie = await Movie.findById(req.params.id).lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.patch("/:id", upload.single("poster_url"), async (req, res) => {
  const user = await Movie.findById(req.params.id);
  fs.unlink(`${user.poster_url}`, (err) => {
    if (err) throw err;
    console.log("file deleted");
  });
  try {
    const newmovie = await Movie.create({
      name: req.body.name,
      actors: req.body.actors,
      languages: req.body.languages,
      directors: req.body.directors,
      poster_url: req.file.path,
    });
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.delete("/:id", async (req, res) => {
  const user = await Movie.findById(req.params.id);
  fs.unlink(`${user.poster_url}`, (err) => {
    if (err) throw err;
    console.log("file deleted");
  });
  try {
    const newmovie = await Movie.findByIdAndDelete(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
module.exports = router;
