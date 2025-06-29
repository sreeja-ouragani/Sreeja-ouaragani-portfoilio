import React from "react";
import { motion } from "framer-motion";
import "../styles/MoreProjects.css";

const imageProjects = [
  {
    title: "Medicine Recommendation System",
    description: "Suggests medicines based on symptoms using AI.",
    image: "/images/medicine.jpg",
    link: "https://github.com/sreeja-ouragani/medicine_recommendation_system",
  },
  {
    title: "Kiddoklass",
    description: "Interactive ed-tech platform tailored for children.",
    image: "/images/kiddoklass.jpg",
    link: "https://kid-vercel.vercel.app/",
  },
];

const githubProjects = [
  {
    title: "Number Plate Recognition",
    description: "Detects and reads vehicle license plates using OpenCV.",
    link: "https://github.com/sreeja-ouragani/number-plate",
  },
  {
    title: "Weather App",
    description: "Displays real-time weather conditions using OpenWeather API.",
    link: "https://github.com/sreeja-ouragani/weather-app",
  },
  {
    title: "ConvertEase",
    description: "Convert files between different formats with ease.",
    link: "https://github.com/sreeja-ouragani/Convert-Ease",
  },
  {
    title: "Girl Salon",
    description: "A complete salon management and appointment booking system.",
    link: "https://github.com/sreeja-ouragani/Girl-Salon",
  },
];

const MoreProjects = () => {
  return (
    <section className="more-projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          More Projects
        </motion.h2>

        <div className="projects-grid">
          {[...imageProjects, ...githubProjects].map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {"image" in project && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Back to Projects Button */}
        <div className="back-to-projects-btn">
          <a href="/#projects">
            <button>← Back to Projects</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
