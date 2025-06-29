import React from "react";
import "../styles/experience.css";
import { Briefcase, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  
  {
    company: "Zidio Development",
    role: "Data Science and Analytics Intern",
    duration: "May 2025 – Present · 2 mos",
    location: "Remote",
    description: "Data Science and Data Analytics",
    logo: "/logos/zidio-logo.png",
    linkedin: "https://www.linkedin.com/in/ouragani-sreeja-860a31308/edit/forms/position/2645565484/?profileFormEntryPoint=PROFILE_SECTION",
  },
  {
    company: "Barola Technologies®",
    role: "Machine Learning Intern",
    duration: "May 2025 · 1 mo",
    location: "Remote",
    description: "Machine Learning",
    logo: "/logos/barola-logo.jpeg",
    linkedin: "https://www.linkedin.com/in/ouragani-sreeja-860a31308/edit/forms/position/2640565627/?profileFormEntryPoint=PROFILE_SECTION",
  },
  {
    company: "Unified Mentor",
    role: "Full Stack Developer Intern",
    duration: "Dec 2024 – Jan 2025 · 2 mos",
    location: "Remote",
    description: "Full-Stack Web Development",
    logo: "/logos/unified-logo.jpg",
    linkedin: "https://www.linkedin.com/in/ouragani-sreeja-860a31308/edit/forms/position/2640557848/?profileFormEntryPoint=PROFILE_SECTION",
  },
];

const floatingVariant = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
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
              <div className="exp-links">
                <a href={exp.linkedin} target="_blank" rel="noopener noreferrer">
                  🔗 View on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
