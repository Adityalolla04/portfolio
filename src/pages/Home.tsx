import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "../App.css";

// Import images
import InventoryDashboard from "../assets/images/InventoryDashboard.png"
import ProfileImage from "../assets/images/profile.jpg";
import HRChurnImage from "../assets/images/HRChurn.png";
import NetflixTitlesImage from "../assets/images/NetflixTitles.png";
import BreastCancer from "../assets/images/BreastCancer.png";
import ProphetInventory from "../assets/images/ProphetInventory.png";
import Hospitallengthofstay from "../assets/images/hospitallengthofstay.png";
import { FaEnvelope, FaLinkedin, FaMedium, FaPhone } from "react-icons/fa";

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
          strings: ["Data Engineer", "Machine Learning Enthusiast"],
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
      A Data Engineer and AI enthusiast with expertise in Big Data, ETL, and Machine Learning,focused on building scalable data pipelines 
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
            <h3>Data Engineer</h3>
            <p><strong>Company:</strong> Evoke Technologies</p>
            <p><strong>Duration:</strong> Apr 2022 - Dec 2023</p>
            <ul>
              <li>Contributed to the development of UCC1 and UCC3 amendments for legal services at CSC Global, ensuring 100% on-time 
                delivery through sprint planning and collaboration.</li>
              <li>Conducted data analysis using SQL, built data pipelines with Python, and implemented machine learning models, 
                resolving more tha 40 defects and optimizing processes.</li>
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

{/* Projects Section with View Project & Medium Button */}
<section id="projects" className={`projects-section`}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {[
            {
              title: "Prediction of Hospital Length of stay in Medical Health Care and Assisstant Chatbot",
              description:
                "The Project is on the Hospital length of the stay using the RNN Techniques. Worked on the NLP of Comorbidities and Currently working on the chatbot",
              image: Hospitallengthofstay,
              github: "https://github.com/Adityalolla04/End-to-End-Project-on-Medical-Health-Care-Assisstant-with-Chatbot-",
              medium: "",
            },
            {
              title: "SmartStock AI powered inventory optimization and demand forecasting",
              description:
                "SmartStock is an AI-powered inventory management solution designed to optimize supply chain operations through accurate demand forecasting, dynamic inventory optimization, and automated defect detection. This end-to-end system integrates machine learning and computer vision to minimize costs, improve resource allocation, and enhance decision-making.",
              image: InventoryDashboard,
              github: "https://github.com/Adityalolla04/-SmartStock-AI-powered-inventory-optimization-and-demand-forecasting",
              medium: "https://medium.com/@ladityasrivatsav0405/smartstock-ai-powered-inventory-optimization-and-demand-forecasting-c9f0b284bac6",
            },
            {
              title: "Prophet Inventory Forecasting Model Deployment on Google Cloud Platform(VertexAI)",
              description:
                "Efficient inventory management is a cornerstone of any retail business. Forecasting future demand accurately can significantly reduce stockouts,minimize overstock situations, and optimize supply chain operations. In this project, I developed and deployed an inventory forecasting model using the Prophet library on Google Cloud Platform (GCP) to predict future inventory requirements for an online retail dataset.",
              image: ProphetInventory,
              github: "https://github.com/Adityalolla04/Online-Retail-sales-Prediction-using-gcp-Vertex-AI",
              medium: "https://medium.com/@ladityasrivatsav0405/prophet-inventory-forecasting-model-deployment-on-google-cloud-platform-f73b6ea830ee",
            },
            {
              title: "End to End Project on HR Churn Data",
              description:
                "The aim of this project is to predict employee churn and evaluate satisfaction levels using ML techniques.",
              image: HRChurnImage,
              github: "https://github.com/Adityalolla04/End-to-End-Project-on-HR-Churn-Data",
              medium: "https://medium.com/@ladityasrivatsav0405/employee-satisfaction-and-churn-prediction-2fb2d3741b61",
            },
            {
              title: "Netflix Release Date Optimization for Maximum Viewership",
              description:
                "This project demonstrates how data analytics can optimize the timing of content releases for engagement.",
              image: NetflixTitlesImage,
              github: "https://github.com/Adityalolla04/Netflix-Release-Date-Optimization-for-Maximum-Viewership",
              medium: "https://medium.com/@ladityasrivatsav0405/optimizing-netflix-release-dates-with-machine-learning-e1f4962d56eb",
            },
            {
              title: "Breast Cancer Prediction Using Machine Learning",
              description:
                "This project applies logistic regression for predicting breast cancer diagnosis using the Breast Cancer Wisconsin dataset.",
              image: BreastCancer,
              github: "https://github.com/Adityalolla04/Breast-Cancer-Prediction-Using-Machine-Learning"
            },
          ].map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                  View Project
                </a>
                <a href={project.medium} target="_blank" rel="noopener noreferrer" className="medium-btn">
                  <FaMedium size={18} /> Medium
                </a>
              </div>
            </div>
          ))}
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
    <p>LinkedIn: <a href="https://www.linkedin.com/in/aditya-srivatsav-lolla/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/aditya-srivatsav-lolla/</a></p>
  </div>
</div>
</section>

{/* Footer Copyright */}
<footer className="footer">
  © {new Date().getFullYear()} Aditya Srivatsav. All rights reserved. | 
  <a href="https://github.com/Adityalolla04" target="_blank" rel="noopener noreferrer"> GitHub</a>
</footer>

    </>
  );
};

export default Home;
