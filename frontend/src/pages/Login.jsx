import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await API.post("/auth/login", form);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.role === "patient") {
        navigate("/patient");
      } else {
        navigate("/doctor");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">
      <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          font-family: Arial, sans-serif;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          padding: 40px;
          border-radius: 15px;
          width: 350px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          text-align: center;
          animation: fadeIn 0.8s ease-in-out;
        }

        .login-card h2 {
          margin-bottom: 25px;
          color: white;
        }

        .login-input {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: none;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
        }

        .login-input:focus {
          box-shadow: 0 0 5px #00f2fe;
        }

        .login-button {
          width: 100%;
          padding: 12px;
          margin-top: 15px;
          border: none;
          border-radius: 8px;
          background: #ffffff;
          color: #0077ff;
          font-weight: bold;
          cursor: pointer;
          transition: 0.3s;
        }

        .login-button:hover {
          background: #0077ff;
          color: white;
          transform: scale(1.05);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 400px) {
          .login-card {
            width: 90%;
          }
        }
      `}</style>

      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome Back 👋</h2>

        <input
          className="login-input"
          placeholder="Email"
          type="email"
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="login-input"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
