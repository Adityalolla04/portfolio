import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import "../App.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="logo">Aditya Srivatsav</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="#about">About</Link></li>
        <li><Link to="#projects">Projects</Link></li>
        <li><Link to="#contact">Contact</Link></li>
      </ul>
      <div className="nav-icons">
        <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/adityasrivatsav" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
