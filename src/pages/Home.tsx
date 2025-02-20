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
      A Software Engineer and AI enthusiast with expertise in Big Data, ETL, and Machine Learning,focused on building scalable data pipelines 
      and optimizing workflows. Proficient in Python, SQL, Spark, AWS, Azure, C#, and .NET Web API, with experience in cloud-based data solutions 
      and automation. Interested in AI-driven insights and real-world applications of data science, with a strong emphasis on continuous learning 
      and problem-solving.  
      </p>

      <h3>Skills</h3>
      <ul className="bullet-list">
    <li><strong>Programming Languages:</strong> Python, Java, SQL, C, C++, R, TypeScript</li>
    <li><strong>Big Data Tools:</strong> Apache Spark, Hadoop, Splunk</li>
    <li><strong>Scrum Management:</strong>Scrum Fundementals, Lean Six Sigma(Green-Belt)</li>
    <li><strong>Frameworks & Libraries:</strong> Machine Learning Applications(Regression, classification, SVM, Neural Network, CNN), 
    Matplotlib, NumPy, Pandas, TensorFlow, Keras, Scikit-learn, Streamlit</li>
    <li><strong>DevOps Tools:</strong> Azure, Docker, Jenkins, Git, AWS</li>
    <li><strong>Software Development Concepts:</strong> Object-Oriented Programming (OOP), Problem Solving</li>
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
              <li>Led the development of UCC1 and UCC3 amendments for legal services at CSC Global, ensuring 100% on-time 
                delivery through sprint planning and collaboration.</li>
              <li>Conducted data analysis using SQL, built data pipelines with Python, and implemented machine learning models, 
                resolving 40+ defects and optimizing processes.</li>
              <li>Managed UCC1 and UCC3 migration from V2 to V3 in the .NET Core web application, ensuring a smooth transition.</li>
              <li>Developed UI features(Type Script) like Global Edit and Filter Types, improving platform stability by 70% and 
                enhancing user satisfaction.</li>
              <li>Provided solutions for production issues and on-call deployments, boosting business performance by 30%.</li>
              <li>Optimized the deployment process, reducing update downtime by 20% through efficient coordination 
                and issue resolution.</li>
            </ul>

          </div>
          <div className="experience-card">
            <h3>Business Analyst</h3>
            <p><strong>Company:</strong> Kannai Storage Solutions</p>
            <p><strong>Duration:</strong> Aug 2021 - Mar 2022</p>
            <ul>
              <li>Secured and managed business leads through cold calling and project management for Racking Systems, 
                increasing sales efficiency by 70%.</li>
              <li>Developed 35+ custom racking solutions using AutoCAD and SAP, and created 5+ Python and 
                CNC programming scripts for automated racking systems,boosting sales performance by 50%.</li>
            </ul>

          </div>
          <div className="experience-card">
            <h3>Software Intern</h3>
            <p><strong>Company:</strong> Workbot Pvt Ltd</p>
            <p><strong>Duration:</strong> Jul 2020 - Jul 2021</p>
            <ul>
              <li>Optimized SQL queries and ETL pipelines to enhance data processing for Chemical and Air Compressor manufacturing, 
                improving efficiency by 40% and reducing query execution time by 25%.</li>
              <li>Applied Six Sigma methodologies to identify and eliminate inefficiencies in manufacturing processes, 
                reducing material waste by 15%.</li>
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
            <p>The aim of this project is to predict employee churn and evaluate satisfaction levels using machine learning techniques. 
              By leveraging key organizational data, the project seeks to provide actionable insights to help HR departments mitigate turnover risks </p>
            <a href="https://github.com/Adityalolla04/End-to-End-Project-on-HR-Churn-Data" target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>
          </div>
          <div className="project-card">
            <img src={NetflixTitlesImage} alt="Netflix Titles" className="project-image" />
            <h3>Netflix Release Date Optimization for Maximum Viewership</h3>
            <p>The Netflix Release Date Optimization project demonstrates how data analytics and machine learning can help optimize the timing of content releases for maximum audience engagement. 
              By identifying seasonal trends, popular genres, and predictive insights, this project provides a robust framework for decision-making in the media industry</p>
            <a href="https://github.com/Adityalolla04/Netflix-Release-Date-Optimization-for-Maximum-Viewership" target="_blank" rel="noopener noreferrer" className="view-project-btn">View Project</a>
          </div>
          <div className="project-card">
            <img src={HRChurnImage} alt="Breast Cancer Prediction Using Machine Learning" className="project-image" />
            <h3>Breast Cancer Prediction Using Machine Learning</h3>
            <p>This project demonstrates the application of logistic regression for predicting breast cancer diagnosis using the Breast Cancer Wisconsin dataset. 
              This model offers a robust approach to classifying tumors as malignant or benign based on critical tumor features.</p>
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
