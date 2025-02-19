import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "../App.css";

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Aditya Srivatsav</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-icons">
          <a href="mailto:ladityasrivatsav0405@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/adityasrivatsav" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home">
        <h1 className="main-title">Hi, I'm <span className="highlight">Aditya Srivatsav</span></h1>
        <h2 className="role-text">
          <Typewriter
            options={{
              strings: ["Software Engineer", "Data Engineer", "Machine Learning Enthusiast"],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h2>
        <p className="intro-text">
          Passionate about software engineering, data science, and AI, I specialize in designing scalable data pipelines,
          optimizing cloud-based platforms, and developing innovative ML models to solve real-world problems.
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="about-container">
        <div className="about-left">
          <h2>Education</h2>
          <div className="education-card">
            <h3>Master in Engineering Science (Data Science)</h3>
            <p>University at Buffalo, 2024 - 2025</p>
          </div>
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>Python, R, SQL, Angular, React</li>
            <li>Machine Learning, Deep Learning, AWS, Azure, Spark, Hadoop</li>
          </ul>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <ul className="About Me">
          <li>
            I am a software engineer with expertise in data engineering, cloud technologies, and AI. With
            experience in SQL, Python, Spark, and AI methodologies, I build intelligent and scalable solutions.
            Passionate about technology, problem-solving, and continuous learning.
          </li>
          </ul>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Software Engineer</h3>
            <p><strong>Company:</strong> Evoke Technologies</p>
            <p><strong>Duration:</strong> Apr 2022 - Dec 2023</p>
            <ul>
              <li>Spearheaded the development of UCC1 and UCC3 amendments for legal services, achieving 100% on-time delivery.</li>
              <li>Developed data pipelines with Python, implemented ML models, resolving 40+ defects.</li>
              <li>Collaborated on UI feature development, improving platform stability by 70%.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Business Analyst</h3>
            <p><strong>Company:</strong> Kannai Storage Solutions</p>
            <p><strong>Duration:</strong> Aug 2021 - Apr 2022</p>
            <ul>
              <li>Developed 35+ custom racking solutions using AutoCAD and SAP.</li>
              <li>Wrote Python and CNC automation scripts, boosting sales performance by 50%.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Software Intern</h3>
            <p><strong>Company:</strong> Worksbot Applications</p>
            <p><strong>Duration:</strong> Jul 2020 - Jun 2021</p>
            <ul>
              <li>Optimized SQL queries and ETL pipelines, improving data processing by 40%.</li>
              <li>Integrated SQL with Power BI for automated real-time reporting.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>AI-Powered Healthcare Analytics</h3>
            <p>Developed an AI model for predicting hospital length of stay using Electronic Health Records (EHR) data.</p>
          </div>
          <div className="project-card">
            <h3>Inventory Optimization</h3>
            <p>Designed an AI-driven tool for inventory forecasting and demand analysis, improving operational efficiency.</p>
          </div>
        </div>
        <div className="github-button">
          <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer" className="btn">
            More Projects on GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <p>Email: <a href="mailto:ladityasrivatsav0405@gmail.com">ladityasrivatsav0405@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <p>Mobile: <a href="+1(716)-463-9524">+1(716)-463-9524</a></p>
          </div>
          <div className="contact-card">
            <FaGithub className="contact-icon" />
            <p>GitHub: <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer">github.com/Adityalolla04</a></p>
          </div>
          <div className="contact-card">
            <FaLinkedin className="contact-icon" />
            <p>LinkedIn: <a href="https://www.linkedin.com/in/adityasrivatsav" target="_blank" rel="noopener noreferrer">linkedin.com/in/adityasrivatsav</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
