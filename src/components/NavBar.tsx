import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin, FaBars, FaSun, FaMoon } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Navbar: React.FC = () => {
  // Load dark mode preference from localStorage
  const [darkMode, setDarkMode] = useState<boolean>(() => localStorage.getItem("darkMode") === "true");

  // Track navbar collapse state for mobile
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  // Apply dark mode styles on mount
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Smooth scrolling function
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
    setIsMenuOpen(false); // Close menu on mobile after click
  };

  // Dynamic colors based on mode
  const iconColor = darkMode ? "#ffffff" : "#000000"; // White for dark mode, Black for light mode
  const bgColor = darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light";
  const textColor = darkMode ? "text-light" : "text-dark";

  return (
    <nav className={`navbar navbar-expand-lg ${bgColor} fixed-top`}>
      <div className="container-fluid">
        {/* Brand Name */}
        <Link className={`navbar-brand fw-bold ${textColor}`} to="/">Aditya Lolla Portfolio</Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <FaBars size={22} color={iconColor} />
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <li className="nav-item" key={section}>
                <button className={`nav-link btn btn-link text-decoration-none ${textColor}`} onClick={() => scrollToSection(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Icons & Dark Mode Toggle */}
        <div className="d-flex align-items-center gap-3">
          <a href="mailto:laditya0405@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={22} color={iconColor} />
          </a>
          <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer">
            <FaGithub size={22} color={iconColor} />
          </a>
          <a href="https://www.linkedin.com/in/aditya-srivatsav-lolla/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={22} color={iconColor} />
          </a>

          {/* Dark Mode Toggle */}
          <button className="btn btn-sm btn-outline-secondary" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun size={18} color={iconColor} /> : <FaMoon size={18} color={iconColor} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
