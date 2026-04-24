const express = require("express");
const {
  createAppointment,
  getAppointments,
  updateAppointment
} = require("../controllers/appointmentController");

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", auth, role("patient"), createAppointment);
router.get("/", auth, getAppointments);
router.put("/:id", auth, role("doctor"), updateAppointment);

module.exports = router;
