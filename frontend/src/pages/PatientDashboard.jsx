import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const { data } = await API.get("/appointments");
      setAppointments(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <style>{`
        .dashboard-container {
          min-height: 100vh;
          padding: 40px;
          background: linear-gradient(to right, #36d1dc, #5b86e5);
          font-family: Arial, sans-serif;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          color: white;
        }

        .book-btn {
          padding: 10px 20px;
          background: white;
          color: #5b86e5;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
          transition: 0.3s;
        }

        .book-btn:hover {
          background: #5b86e5;
          color: white;
          transform: scale(1.05);
        }

        .appointments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .appointment-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          padding: 20px;
          border-radius: 15px;
          color: white;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          transition: 0.3s;
        }

        .appointment-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }

        .status {
          display: inline-block;
          margin-top: 10px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }

        .status.pending {
          background: orange;
          color: white;
        }

        .status.approved {
          background: green;
          color: white;
        }

        .status.rejected {
          background: red;
          color: white;
        }

        @media (max-width: 600px) {
          .dashboard-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
      `}</style>

      <div className="dashboard-header">
        <h2>Patient Dashboard 🩺</h2>
        <Link to="/book" className="book-btn">
          + Book Appointment
        </Link>
      </div>

      <div className="appointments-grid">
        {appointments.length === 0 ? (
          <p style={{ color: "white" }}>No appointments yet.</p>
        ) : (
          appointments.map((app) => (
            <div className="appointment-card" key={app._id}>
              <h3>Doctor: {app.doctorId?.name || "Doctor"}</h3>
              <p>Date: {new Date(app.date).toLocaleDateString()}</p>
              <p>Time: {app.timeSlot}</p>

              <span className={`status ${app.status}`}>
                {app.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PatientDashboard;
