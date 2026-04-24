// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//   return (
//     <div className="home-container">

//       {/* Navbar */}
//       <nav className="navbar">
//         <h2>🏥 MediCare</h2>
//         <div>
//           <Link to="/login" className="nav-btn">Login</Link>
//           <Link to="/register" className="nav-btn register">Register</Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Book Doctor Appointments Easily</h1>
//         <p>
//           Fast, Secure and Reliable Medical Appointment System.
//           Connect with trusted doctors in seconds.
//         </p>

//         <div className="hero-buttons">
//           <Link to="/register" className="btn-primary">Get Started</Link>
//           <Link to="/login" className="btn-secondary">Login</Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features">
//         <div className="feature-card">
//           <h3>👨‍⚕️ Verified Doctors</h3>
//           <p>Consult experienced and verified specialists.</p>
//         </div>

//         <div className="feature-card">
//           <h3>📅 Easy Booking</h3>
//           <p>Book appointments in just a few clicks.</p>
//         </div>

//         <div className="feature-card">
//           <h3>🔒 Secure System</h3>
//           <p>Your data is protected with JWT authentication.</p>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <p>© 2026 MediCare | Built by Raghvendra Pal</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        .home-container {
          min-height: 100vh;
          background: linear-gradient(to right, #dbeafe, #93c5fd);
          display: flex;
          flex-direction: column;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background: #0d6efd;
          color: white;
        }

        .nav-btn {
          margin-left: 15px;
          padding: 8px 16px;
          text-decoration: none;
          color: white;
          border: 1px solid white;
          border-radius: 6px;
          transition: 0.3s;
        }

        .nav-btn:hover {
          background: white;
          color: #0d6efd;
        }

        .register {
          background: white;
          color: #0d6efd;
        }

        .hero {
          text-align: center;
          padding: 80px 20px;
          animation: fadeIn 1s ease-in-out;
        }

        .hero h1 {
          font-size: 42px;
          color: #0d3b66;
        }

        .hero p {
          font-size: 18px;
          color: #444;
          margin: 20px 0;
        }

        .hero-buttons a {
          margin: 10px;
          padding: 12px 24px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }

        .btn-primary {
          background: #0d6efd;
          color: white;
        }

        .btn-primary:hover {
          background: #084298;
        }

        .btn-secondary {
          background: white;
          border: 2px solid #0d6efd;
          color: #0d6efd;
        }

        .btn-secondary:hover {
          background: #0d6efd;
          color: white;
        }

        .features {
          display: flex;
          justify-content: center;
          gap: 30px;
          padding: 60px 20px;
          flex-wrap: wrap;
        }

        .feature-card {
          background: white;
          padding: 30px;
          width: 250px;
          border-radius: 12px;
          box-shadow: 0px 6px 15px rgba(0,0,0,0.1);
          text-align: center;
          transition: 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0px 12px 20px rgba(0,0,0,0.2);
        }

        .footer {
          margin-top: auto;
          text-align: center;
          padding: 20px;
          background: #0d6efd;
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 30px;
          }

          .features {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="home-container">

        {/* Navbar */}
        <nav className="navbar">
          <h2>🏥 MediCare</h2>
          <div>
            <Link to="/login" className="nav-btn">Login</Link>
            <Link to="/register" className="nav-btn register">Register</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <h1>Book Doctor Appointments Easily</h1>
          <p>
            Fast, Secure and Reliable Medical Appointment System.
            Connect with trusted doctors in seconds.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="btn-primary">Get Started</Link>
            <Link to="/login" className="btn-secondary">Login</Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="feature-card">
            <h3>👨‍⚕️ Verified Doctors</h3>
            <p>Consult experienced and verified specialists.</p>
          </div>

          <div className="feature-card">
            <h3>📅 Easy Booking</h3>
            <p>Book appointments in just a few clicks.</p>
          </div>

          <div className="feature-card">
            <h3>🔒 Secure System</h3>
            <p>Your can trust this system.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2026 MediCare | Built by Raghvendra Pal 🚀</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
