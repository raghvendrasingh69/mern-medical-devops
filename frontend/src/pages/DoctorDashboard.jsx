// import { useEffect, useState } from "react";
// import API from "../services/api";

// const DoctorDashboard = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//  const fetchAppointments = async () => {
//   try {
//     const { data } = await API.get("/appointments");
//     console.log("Appointments:", data);
//     setAppointments(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

//   const updateStatus = async (id, status) => {
//     await API.put(`/appointments/${id}`, { status });
//     fetchAppointments();
//   };

//   return (
//     <div>
//       <h2>Doctor Dashboard</h2>

//       {appointments.map((app) => (
//         <div key={app._id}>
//           <p>Patient: {app.patient?.name}</p>
//           <p>Date: {app.date}</p>
//           <p>Status: {app.status}</p>

//           {app.status === "pending" && (
//             <>
//               <button onClick={() => updateStatus(app._id, "approved")}>
//                 Approve
//               </button>
//               <button onClick={() => updateStatus(app._id, "rejected")}>
//                 Reject
//               </button>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DoctorDashboard;


import { useEffect, useState } from "react";
import API from "../services/api";

const DoctorDashboard = () => {
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

  const updateStatus = async (id, status) => {
    await API.put(`/appointments/${id}`, { status });
    fetchAppointments();
  };

  return (
    <>
      <style>{`
        .dashboard-container {
          padding: 40px;
          background-color: #f4f7fc;
          min-height: 100vh;
          font-family: "Segoe UI", sans-serif;
        }

        .dashboard-title {
          text-align: center;
          margin-bottom: 40px;
          color: #2c3e50;
          font-size: 28px;
          font-weight: 600;
        }

        .appointments-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 25px;
        }

        .appointment-card {
          background: #ffffff;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: 0.3s ease;
        }

        .appointment-card:hover {
          transform: translateY(-5px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .status {
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .status.pending {
          background-color: #fff3cd;
          color: #856404;
        }

        .status.approved {
          background-color: #d4edda;
          color: #155724;
        }

        .status.rejected {
          background-color: #f8d7da;
          color: #721c24;
        }

        .date {
          margin: 15px 0;
          color: #555;
          font-size: 14px;
        }

        .button-group {
          display: flex;
          gap: 10px;
        }

        button {
          padding: 8px 15px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .approve-btn {
          background-color: #28a745;
          color: white;
        }

        .approve-btn:hover {
          background-color: #218838;
        }

        .reject-btn {
          background-color: #dc3545;
          color: white;
        }

        .reject-btn:hover {
          background-color: #c82333;
        }

        .no-data {
          text-align: center;
          color: #777;
          font-size: 16px;
        }
      `}</style>

      <div className="dashboard-container">
        <h2 className="dashboard-title">Doctor Dashboard</h2>

        <div className="appointments-grid">
          {appointments.length === 0 ? (
            <p className="no-data">No Appointments Found</p>
          ) : (
            appointments.map((app) => (
              <div className="appointment-card" key={app._id}>
                <div className="card-header">
                  <h3>{app.patient?.name}</h3>
                  <span className={`status ${app.status}`}>
                    {app.status}
                  </span>
                </div>

                <p className="date">
                  📅 {new Date(app.date).toLocaleDateString()}
                </p>

                {app.status === "pending" && (
                  <div className="button-group">
                    <button
                      className="approve-btn"
                      onClick={() => updateStatus(app._id, "approved")}
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() => updateStatus(app._id, "rejected")}
                    >
                       Reject
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;