const express = require("express");
const router = express.Router();
const Seats = require("../models/seats.model");
router.post("/", async (req, res) => {
  try {
    const newmovie = await Seats.create(req.body);
    console.log(req.body)
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/", async (req, res) => {
  try {
    const newmovie = await Seats.find().populate("show").lean().exec();
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const newmovie = await Seats.findById(req.params.id).populate("show").lean().exec();
    if(newmovie.show.total_seats > 1){
      return res.status(200).send( newmovie, "seats are available" );
    } else {
      return res.status(200).send("seats are not available");
    }
    
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const newmovie = await Seats.findByIdAndUpdate(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const newmovie = await Seats.findByIdAndDelete(req.params.id);
    return res.status(200).json({ newmovie });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
module.exports = router;
