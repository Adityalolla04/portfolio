import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "../App.css";

// Import images
import ProfileImage from "../assets/images/profile.jpg";
import HRChurnImage from "../assets/images/HRChurn.png";
import NetflixTitlesImage from "../assets/images/NetflixTitles.png";
import BackgroundImage from "../assets/images/BackGround.jpg";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Home = () => {

  useEffect(() => {
    // Intersection Observer for scroll animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Home Section */}
<section id = "home" className="home">
  <div className="home-content text-center">
    <h1 className="main-title">
      Hi, I'm <span className="highlight">Aditya Srivatsav</span>
    </h1>
    <h2 className="role-text">
      <Typewriter
        options={{
          strings: ["Software Engineer", "Machine Learning Enthusiast"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </h2>
  </div>
</section>
{/* About Section */}
<section id="about" className="about-container">
  <h2 className="section-title">About</h2>
  <div className="about-content">
    {/* Left Side - Profile Image & Education */}
    <div className="about-left">
      <img src={ProfileImage} alt="Profile" className="profile-image" />
      <div className="education-card">
        <h3>Education</h3>
        <p>Master in Engineering Science (Data Science)</p>
        <p>University at Buffalo, 2024 - 2025</p>
      </div>
    </div>

    {/* Right Side - Summary, Skills, Languages, Country, Interests (Bullet Points) */}
    <div className="about-right">
      <h3>Summary</h3>
      <p>
        A **Data Engineer & AI Enthusiast** with expertise in **Big Data, ETL, and Machine Learning**.  
        Passionate about **building scalable data pipelines** and optimizing **data workflows**.  
        Skilled in **Python, SQL, Spark, AWS, and Azure**, focusing on **cloud-based data solutions**.  
        Interested in **automation, AI-driven insights, and real-world applications of data science**.  
        Strong believer in **continuous learning, innovation, and problem-solving**.  
      </p>

      <h3>Skills</h3>
      <ul className="bullet-list">
        <li>Python, SQL, Spark, AWS, Azure</li>
        <li>Data Engineering, ETL, ML, AI</li>
        <li>Cloud Computing & Distributed Systems</li>
        <li>Data Visualization & Business Intelligence</li>
      </ul>

      <h3>Languages Known</h3>
      <ul className="bullet-list">
        <li>English</li>
        <li>Telugu</li>
        <li>Hindi</li>
        <li>German (Beginner)</li>
      </ul>

      <h3>Country</h3>
      <p>United States</p>

      <h3>Interests</h3>
      <ul className="bullet-list">
        <li>Cricket</li>
        <li>Cooking</li>
      </ul>
    </div>
  </div>
</section>

 


      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Software Engineer</h3>
            <p><strong>Company:</strong> Evoke Technologies</p>
            <p><strong>Duration:</strong> Apr 2022 - Dec 2023</p>
            <ul>
              <li>Designed real-time and batch data pipelines using Apache Spark, Kafka, and Python.</li>
              <li>Developed cloud-based storage solutions using AWS Redshift, Snowflake, and BigQuery.</li>
              <li>Led ETL pipeline development for analytics, ensuring compliance with data governance.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Business Analyst</h3>
            <p><strong>Company:</strong> Kannai Storage Solutions</p>
            <p><strong>Duration:</strong> Aug 2021 - Mar 2022</p>
            <ul>
              <li>Developed SAP-integrated automation tools, reducing warehouse turnaround time by 50%.</li>
            </ul>
          </div>
          <div className="experience-card">
            <h3>Software Intern</h3>
            <p><strong>Company:</strong> Workbot Pvt Ltd</p>
            <p><strong>Duration:</strong> Jul 2020 - Jul 2021</p>
            <ul>
              <li>Designed React.js dashboards for real-time data visualization.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section with View Project Button */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={HRChurnImage} alt="HR Churn" className="project-image" />
            <h3>End to End Project on HR Churn Data</h3>
            <a href="https://github.com/Adityalolla04/End-to-End-Project-on-HR-Churn-Data" target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>
          </div>
          <div className="project-card">
            <img src={NetflixTitlesImage} alt="Netflix Titles" className="project-image" />
            <h3>Netflix Release Date Optimization for Maximum Viewership</h3>
            <a href="https://github.com/Adityalolla04/Netflix-Release-Date-Optimization-for-Maximum-Viewership" target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>
          </div>
          <div className="project-card">
            <img src={HRChurnImage} alt="Breast Cancer Prediction Using Machine Learning" className="project-image" />
            <h3>Breast Cancer Prediction Using Machine Learning</h3>
            <a href="https://github.com/Adityalolla04/Breast-Cancer-Prediction-Using-Machine-Learnings" target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>
          </div>
        </div>
      </section>

      <section id="more-projects" className="more-projects-section">
  <h2 className="github-message" style={{ backgroundImage: "url('/assets/images/BackGround.jpg')" }}>
    For more projects, please visit <span className="github-highlight">GitHub</span>
  </h2>
  <p className="github-subtext">
    Turning coffee into code ☕🚀 Explore my projects on GitHub!
  </p>
  <a 
    href="https://github.com/Adityalolla04" 
    target="_blank" 
    rel="noopener noreferrer"
    className="github-button"
  >
    GitHub
  </a>
</section>


    {/* Contact Section */}
  <section id="contact" className="contact-section">
<h2 className="section-title">Contact</h2>
<div className="contact-grid">
  <div className="contact-card">
    <FaEnvelope className="contact-icon" />
    <p>Email: <a href="mailto:ladityasrivatsav0405@gmail.com">ladityasrivatsav0405@gmail.com</a></p>
  </div>
  <div className="contact-card">
    <FaPhone className="contact-icon" />
    <p>Phone: +1 716-463-9524</p>
  </div>
  <div className="contact-card">
    <FaLinkedin className="contact-icon" />
    <p>LinkedIn: <a href="https://linkedin.com/in/adityasrivatsav" target="_blank" rel="noopener noreferrer">linkedin.com/in/adityasrivatsav</a></p>
  </div>
</div>
</section>

    </>
  );
};

export default Home;
