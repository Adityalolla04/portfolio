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
      Data Engineer with over 3 years of experience in ETL pipeline development, cloud computing, and
      machine learning. Expertise in developing data models, optimizing data workflows, and deploying
      scalable solutions using AWS, GCP, and Azure platforms. Proven success in leveraging Python, SQL,
      and big data technologies to enhance data accuracy, improve business performance, and streamline
      data processes. Skilled in data visualization, predictive analytics, and ensuring data integrity.
      Enthusiastic about contributing to innovative projects in data engineering and machine learning to
      drive actionable insights and operational excellence.
      </p>

      <h3>Skills</h3>
      <ul className="bullet-list">
        <p>
        ETL Pipeline Development, Machine Learning Models, Big Data Technologies (Hadoop, Spark), Cloud
        Platforms (AWS, GCP, Azure), Data Integration, Data Governance, Data Warehousing, SQL & NoSQL
        Databases, Data Analysis & Visualization, Data Pipelines Automation, Python Programming, Predictive
        Analytics, Data Transformation, Agile Scrum Methodology, Data Quality Assurance, SQL Query
        Optimization, Predictive Modeling, Data Science (TensorFlow, Scikit-learn), Business Intelligence
        (Tableau, Power BI), Machine Learning Algorithms (XGBoost, Random Forest)
        </p>
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
            <p><strong>Location:</strong> Hyderabad, India</p>
            <p><strong>Duration:</strong> Apr 2022 - Dec 2023</p>
            <ul>
              <li>Developed ETL pipelines using Python and SQL, improving data processing and workflow efficiency by 40%.</li>
              <li>Optimized machine learning models to enhance data analysis and forecasting, improving business decision-making.</li>
              <li>Led data migration projects to AWS and GCP, improving data storage scalability and platform reliability by 30%.</li>
              <li>Implemented automated data workflows using Python and SQL, reducing manual processing efforts by 50%.</li>
              <li>Collaborated with cross-functional teams to integrate and deploy cloud-based solutions, streamlining platform functionality by 70%.</li>
              <li>Created data visualization dashboards in Tableau and Power BI, enabling stakeholders to make data-driven decisions.</li>
              <li>Enhanced data pipeline reliability by implementing data governance best practices, resulting in a 20% reduction in errors.</li>
              <li>Worked in Agile teams, participating in scrum sprints and improving sprint efficiency and collaboration.</li>
              <li><strong>Tools:</strong> Python, SQL, AWS, GCP, Tableau, Power BI, Machine Learning, ETL, Scrum</li>
            </ul>


          </div>
          <div className="experience-card">
            <h3>Data Analyst</h3>
            <p><strong>Company:</strong> Certiview IT & Management Solutions Pvt Ltd</p>
            <p><strong>Location:</strong> Hyderabad, India</p>
            <p><strong>Duration:</strong> April 2021 - Mar 2022</p>
            <ul>
              <li>Developed predictive models using TensorFlow and Scikit-learn, improving business risk forecasts by 18%.</li>
              <li>Built automated data pipelines for real-time ingestion into Google BigQuery and Snowflake, reducing manual effort by 70%.</li>
              <li>Implemented indexing strategies to optimize SQL queries, reducing report generation time by 50%.</li>
              <li>Created interactive dashboards using Power BI and Tableau, allowing business teams to define KPIs and analyze data insights efficiently.</li>
              <li>Managed data quality assurance by implementing root-cause analysis and alerting systems, ensuring data pipeline integrity.</li>
              <li>Used machine learning models to enhance data accuracy and forecast future trends, improving business outcomes by 20%.</li>
              <li>Collaborated with data engineers to ensure that new data models were integrated into existing databases, improving overall system performance.</li>
              <li><strong>Tools:</strong> SQL, Python, Power BI, Tableau, Google BigQuery, Snowflake, TensorFlow, Scikit-learn</li>
          </ul>


          </div>
          <div className="experience-card">
            <h3>Data Analyst Intern</h3>
            <p><strong>Company:</strong>Certiview IT & Management Solutions Pvt Ltd, Hyderabad </p>
            <p><strong>Location:</strong> Hyderabad, India</p>
            <p><strong>Duration:</strong> Jul 2020 - March 2021</p>
            <ul>
              <li>Developed ETL scripts in SQL and Python, reducing data cleaning time by 40%.</li>
              <li>Standardized and cleaned data, improving data accuracy by 30% through data imputation techniques.</li>
              <li>Built interactive dashboards using Power BI and Tableau, improving decision-making speed by 35%.</li>
              <li>Optimized data pipelines for enhanced data transformation and loading efficiency.</li>
              <li>Worked with machine learning algorithms to analyze and predict trends from large datasets.</li>
              <li>Documented all processes and workflows, ensuring smooth onboarding for new team members and reducing operational gaps.</li>
              <li>Collaborated with senior data analysts to identify and troubleshoot 
                  data-related issues.</li>
              <li><strong>Tools:</strong> SQL, Python, Power BI, Tableau, Pandas, Scikit-learn</li>
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
              github: "https://github.com/Adityalolla04/End-to-End-Project-on-Medical-Health-Care-Assisstant-with-Chatbot-"
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
              github: "https://github.com/Adityalolla04/Breast-Cancer-Prediction-Using-Machine-Learning",
              medium: "https://medium.com/@ladityasrivatsav0405/predicting-breast-cancer-with-96-5-accuracy-using-logistic-regression-05357127d090"
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
    <p>Email: <a href="mailto:ladityasrivatsav0405@gmail.com">laditya0405@gmail.com</a></p>
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
