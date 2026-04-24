const Appointment = require("../models/Appointment");

// Create Appointment (Patient Only)
exports.createAppointment = async (req, res) => {
  try {
    const { department, doctor, date, timeSlot } = req.body;

    const appointment = await Appointment.create({
      department,
      doctor, // 👈 make sure doctor comes from frontend
      date,
      timeSlot,
      patient: req.user.id
    });

    res.status(201).json(appointment);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get Appointments
exports.getAppointments = async (req, res) => {
  try {
    //   console.log("Logged in user id:", req.user.id);
    //  console.log("Logged in role:", req.user.role);

    let appointments;

    appointments = await Appointment.find(
  req.user.role === "patient"
    ? { patient: req.user.id }
    : { doctor: req.user.id }
)
.populate("doctor", "name")
.populate("patient", "name");


    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Status (Doctor Only)
exports.updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    appointment.status = req.body.status;
    await appointment.save();

    res.json({ message: "Appointment updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// console.log("Logged in user id:", req.user.id);
// console.log("Logged in role:", req.user.role);
