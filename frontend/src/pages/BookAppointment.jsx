








// import { useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// const BookAppointment = () => {
//   const [form, setForm] = useState({
//     department: "",
//     doctor: "",
//     date: "",
//     timeSlot: "",
//   });

//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await API.post("/appointments", {
//         ...form,
//         patientId: user._id,
//       });

//       alert("Appointment Booked Successfully ✅");
//       navigate("/patient");

//     } catch (error) {
//       console.error(error);
//       alert(error.response?.data?.message || "Booking Failed ❌");
//     }
//   };

//   return (
//     <div className="appointment-container">
//       <style>{`
//         .appointment-container {
//           min-height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: linear-gradient(to right, #667eea, #764ba2);
//           font-family: Arial, sans-serif;
//         }

//         .appointment-card {
//           background: rgba(255, 255, 255, 0.15);
//           backdrop-filter: blur(15px);
//           padding: 40px;
//           border-radius: 15px;
//           width: 400px;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
//           text-align: center;
//           animation: fadeIn 0.8s ease-in-out;
//         }

//         .appointment-card h2 {
//           margin-bottom: 25px;
//           color: white;
//         }

//         .appointment-input {
//           width: 100%;
//           padding: 12px;
//           margin: 10px 0;
//           border: none;
//           border-radius: 8px;
//           outline: none;
//           font-size: 14px;
//         }

//         .appointment-input:focus {
//           box-shadow: 0 0 6px #ffffff;
//         }

//         .appointment-button {
//           width: 100%;
//           padding: 12px;
//           margin-top: 15px;
//           border: none;
//           border-radius: 8px;
//           background: white;
//           color: #5a67d8;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .appointment-button:hover {
//           background: #5a67d8;
//           color: white;
//           transform: scale(1.05);
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @media (max-width: 450px) {
//           .appointment-card {
//             width: 90%;
//           }
//         }
//       `}</style>

//       <form className="appointment-card" onSubmit={handleSubmit}>
//         <h2>Book Appointment 🩺</h2>

//         <input
//           className="appointment-input"
//           placeholder="Department"
//           value={form.department}
//           onChange={(e) =>
//             setForm({ ...form, department: e.target.value })
//           }
//           required
//         />

//         <input
//           className="appointment-input"
//           placeholder="Doctor ID"
//           value={form.doctor}
//           onChange={(e) =>
//             setForm({ ...form, doctor: e.target.value })
//           }
//           required
//         />

//         <input
//           className="appointment-input"
//           type="date"
//           value={form.date}
//           onChange={(e) =>
//             setForm({ ...form, date: e.target.value })
//           }
//           required
//         />

//         <input
//           className="appointment-input"
//           placeholder="Time Slot"
//           value={form.timeSlot}
//           onChange={(e) =>
//             setForm({ ...form, timeSlot: e.target.value })
//           }
//           required
//         />

//         <button className="appointment-button" type="submit">
//           Book Appointment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookAppointment;  







import { useState, useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const [form, setForm] = useState({
    department: "",
    doctor: "",
    date: "",
    timeSlot: "",
  });

  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  // 🔥 Static Time Slots
  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // 🔥 Fetch Doctors from Backend
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await API.get("/doctors");
        setDoctors(res.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/appointments", {
        ...form,
        patient: user._id, // ✅ corrected (was patientId)
      });

      alert("Appointment Booked Successfully ✅");
      navigate("/patient");

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Booking Failed ❌");
    }
  };

  return (
    <div className="appointment-container">
      <style>{`
        .appointment-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #667eea, #764ba2);
          font-family: Arial, sans-serif;
        }

        .appointment-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          padding: 40px;
          border-radius: 15px;
          width: 400px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
        }

        .appointment-card h2 {
          margin-bottom: 25px;
          color: white;
        }

        .appointment-input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
        }

        .appointment-button {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: white;
          color: #5a67d8;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .appointment-button:hover {
          background: #5a67d8;
          color: white;
          transform: scale(1.05);
        }

        @media (max-width: 450px) {
          .appointment-card {
            width: 90%;
          }
        }
      `}</style>

      <form className="appointment-card" onSubmit={handleSubmit}>
        <h2>Book Appointment 🩺</h2>

        {/* 🔥 Doctor Dropdown */}
        <select
          className="appointment-input"
          value={form.doctor}
          onChange={(e) => {
            const selectedDoctor = doctors.find(
              (doc) => doc._id === e.target.value
            );

            setForm({
              ...form,
              doctor: selectedDoctor._id,
              department: selectedDoctor.department,
            });
          }}
          required
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc) => (
            <option key={doc._id} value={doc._id}>
              {doc.name}
            </option>
          ))}
        </select>

        {/* 🔥 Auto-filled Department */}
        <input
          className="appointment-input"
          placeholder="Department"
          value={form.department}
          readOnly
          required
        />

        {/* 🔥 Date Picker */}
        <input
          className="appointment-input"
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          required
        />

        {/* 🔥 Time Slot Dropdown */}
        <select
          className="appointment-input"
          value={form.timeSlot}
          onChange={(e) =>
            setForm({ ...form, timeSlot: e.target.value })
          }
          required
        >
          <option value="">Select Time Slot</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        <button className="appointment-button" type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;