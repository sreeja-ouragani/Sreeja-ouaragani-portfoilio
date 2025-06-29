import React from "react";
import "../styles/experience.css";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Zidio Development",
    role: "Data Science and Analytics Intern",
    duration: "May 2025 – Present · 2 mos",
    location: "Remote",
    description: "Data Science and Data Analytics",
    logo: "/logos/zidio-logo.png",
  },
  {
    company: "Barola Technologies®",
    role: "Machine Learning Intern",
    duration: "May 2025 · 1 mo",
    location: "Remote",
    description: "Machine Learning",
    logo: "/logos/barola-logo.jpeg",
  },
  {
    company: "Unified Mentor",
    role: "Full Stack Developer Intern",
    duration: "Dec 2024 – Jan 2025 · 2 mos",
    location: "Remote",
    description: "Full-Stack Web Development",
    logo: "/logos/unified-logo.jpg",
  },
];

// 🔁 Looping animation for continuous pulse effect
const floatingVariant = {
  animate: {
    y: [0, -8, 0], // Move up then back
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity, // Loop forever
    },
  },
};

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div
              className="exp-card"
              key={index}
              variants={floatingVariant}
              animate="animate"
            >
              <div className="exp-header">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="exp-logo"
                />
                <div>
                  <h3>{exp.role}</h3>
                  <p className="company-name">{exp.company} · Internship</p>
                </div>
              </div>
              <div className="exp-meta">
                <span>
                  <Clock size={16} /> {exp.duration}
                </span>
                <span>
                  <MapPin size={16} /> {exp.location}
                </span>
              </div>
              <p className="exp-description">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
