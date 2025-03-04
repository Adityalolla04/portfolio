import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const navigate = useNavigate();

  // Function to handle smooth scrolling for same-page links
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); // Navigate to home if not on the homepage
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500); // Wait for navigation to complete
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Aditya Srivatsav</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("experience")}>Experience</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("projects")}>Projects</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center gap-3">
          <a href="mailto:ladityasrivatsav0405@gmail.com" target="_blank" rel="noopener noreferrer" className="text-light" aria-label="Send an Email">
            <FaEnvelope size={20} />
          </a>
          <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aditya-srivatsav-lolla/" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaLinkedin size={20} />
          </a>
          <button className="btn btn-outline-light" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
