const express = require("express");
const Itinerary = require("../models/Itinerary");

const router = express.Router();

router.post("/save", async (req, res) => {
    const { destination, preferences, activities } = req.body;
    try {
        const newItinerary = new Itinerary({ destination, preferences, activities });
        await newItinerary.save();
        res.json({ success: true, message: "Saved itinerary" });
    }
    catch (error){
        res.status(500).json({ success: false, message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const itin = await Itinerary.find();
        res.json(itin);
    }
    catch (error){
        res.status(500).json({ success: false, message: error.message })
    }
});

router.get("/:id", async (req, res) => {
    try {
      const itinerary = await Itinerary.findById(req.params.id);
      res.json(itinerary);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
      const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ success: true, data: updatedItinerary });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
      await Itinerary.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: "Itinerary deleted successfully" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;