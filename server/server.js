const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const itineraryRoutes = require("./routes/itineraries");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/itineraries", itineraryRoutes);

app.get("/", (req, res) => {
    res.send("Server is up");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
