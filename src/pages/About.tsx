import React from "react";
import "../App.css";

const About: React.FC = () => {
  return (
    <section className="about-container">
      <h1>About Me</h1>
      <p>
        I am currently pursuing a Master's in **Engineering Science (Data Science)** at 
        the University at Buffalo. With over **2 years of experience** as a Data Engineer, 
        I have built scalable data solutions, optimized ML models, and developed web applications.
      </p>

      <h2>Education</h2>
      <ul>
        <li><strong>University at Buffalo</strong> - M.S. in Data Science (2024-2025)</li>
        <li><strong>SRM Institute of Science and Technology</strong> - B.Tech in Mechanical Engineering (2017-2021)</li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>🛠 Python, R, SQL, JavaScript, TypeScript</li>
        <li>💡 Machine Learning, Deep Learning, Big Data</li>
        <li>🌐 Web Development: Angular, React, Streamlit</li>
        <li>☁️ Cloud & DevOps: Azure, Docker, Jenkins</li>
      </ul>
    </section>
  );
};

export default About;
