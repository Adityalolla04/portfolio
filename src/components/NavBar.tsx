import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Navbar: React.FC = () => {
  // Load dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const navigate = useNavigate();

  // Apply dark mode styles
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Function to handle smooth scrolling for same-page links
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); // Navigate to home if not on the homepage
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand fw-bold" to="/">Aditya Srivatsav</Link>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex gap-4">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <button className="nav-link btn btn-link text-decoration-none" onClick={() => scrollToSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Icons & Dark Mode Toggle */}
        <div className="d-flex align-items-center gap-3">
          <a href="mailto:ladityasrivatsav0405@gmail.com" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaEnvelope size={22} />
          </a>
          <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/aditya-srivatsav-lolla/" target="_blank" rel="noopener noreferrer" className="text-light">
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
