import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient"
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", form);
      alert("Registered Successfully ✅");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed ❌");
    }
  };

  return (
    <div className="register-container">
      <style>{`
        .register-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #43e97b, #38f9d7);
          font-family: Arial, sans-serif;
        }

        .register-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          padding: 40px;
          border-radius: 15px;
          width: 380px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
          animation: fadeIn 0.8s ease-in-out;
        }

        .register-card h2 {
          margin-bottom: 25px;
          color: white;
        }

        .register-input,
        .register-select {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
        }

        .register-input:focus,
        .register-select:focus {
          box-shadow: 0 0 5px #00ffcc;
        }

        .register-button {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: white;
          color: #00b894;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .register-button:hover {
          background: #00b894;
          color: white;
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 420px) {
          .register-card {
            width: 90%;
          }
        }
      `}</style>

      <form className="register-card" onSubmit={handleSubmit}>
        <h2>Create Account 🚀</h2>

        <input
          className="register-input"
          placeholder="Full Name"
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="register-input"
          type="email"
          placeholder="Email Address"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="register-input"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          className="register-select"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>

        <button className="register-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
