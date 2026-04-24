// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const doctorRoutes = require("./routes/doctorRoutes");
// const connectDB = require("./config/db");


// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/appointments", require("./routes/appointmentRoutes"));
// // app.use("/api", require("./routes/userRoutes"));
// app.use("/api/doctors", doctorRoutes);

// app.listen(5000, () => console.log("Server running on port 5000"));



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const doctorRoutes = require("./routes/doctorRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/appointments", require("./routes/appointmentRoutes"));
app.use("/api/doctors", doctorRoutes);

// Serve Frontend
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Dynamic Port for Deployment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);