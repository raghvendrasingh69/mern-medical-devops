const express = require("express");
const router = express.Router();
const User = require("../models/User");


// 🔥 GET ALL DOCTORS
// GET /api/doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await User.find({ role: "doctor" })
      .select("_id name department email"); // exclude password

    res.status(200).json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


// 🔥 GET SINGLE DOCTOR BY ID (Optional but Professional)
// GET /api/doctors/:id
router.get("/:id", async (req, res) => {
  try {
    const doctor = await User.findOne({
      _id: req.params.id,
      role: "doctor"
    }).select("_id name department email");

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    res.status(200).json(doctor);
  } catch (error) {
    console.error("Error fetching doctor:", error);
    res.status(500).json({ message: "Server Error" });
  }
});


module.exports = router;