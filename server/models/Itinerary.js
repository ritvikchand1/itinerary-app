const mongoose = require("mongoose");

const ItinerarySchema = new mongoose.Schema({
    destination: { type: String, required: true },
    preferences: { type: String },
    activities: [String],
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Itinerary", ItinerarySchema);