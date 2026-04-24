// const mongoose = require("mongoose");

// const appointmentSchema = new mongoose.Schema({
//   department: { type: String },
//   doctor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   patient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   date: { type: String, required: true },
//   timeSlot: { type: String, required: true },
//   status: {
//     type: String,
//     enum: ["pending", "approved", "rejected"],
//     default: "pending"
//   }
// });

// module.exports = mongoose.model("Appointment", appointmentSchema);



const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: Date,   // 🔥 Better than String
      required: true,
    },

    timeSlot: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }   // 🔥 Adds createdAt & updatedAt
);

module.exports = mongoose.model("Appointment", appointmentSchema);