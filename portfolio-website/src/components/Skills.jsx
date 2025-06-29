import React from "react";
import "../styles/skills.css";
import {
  FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaPhp,
  FaGitAlt, FaGithub, FaBrain
} from "react-icons/fa";
import {
  SiMongodb, SiMysql, SiJavascript, SiExpress, SiFlask, SiVite,
  SiAngular, SiOpencv, SiTensorflow, SiPostman
} from "react-icons/si";

const progressSkills = [
  { name: "Python", percent: 90 },
  { name: "JavaScript", percent: 85 },
  { name: "Java", percent: 60 },
  { name: "PHP", percent: 70 },
  { name: "Web Development", percent: 95 },
  { name: "Databases", percent: 80 },
  { name: "DSA", percent: 70 },
];

const remainingSkills = [
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Angular", icon: <SiAngular /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {/* Left: Progress Bars */}
        <div className="progress-section">
          {progressSkills.map((skill, index) => (
            <div className="progress-bar-container" key={index}>
              <div className="label">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="bar">
                <div
                  className="fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Rotating Circle + Badges */}
        <div className="badge-section">
          <div className="big-tech-circle spin">
            <div className="icon-list">
              <div className="icon-with-label"><FaBrain /><span>AI/ML</span></div>
              <div className="icon-with-label"><FaReact /><span>React</span></div>
              <div className="icon-with-label"><FaNodeJs /><span>Node.js</span></div>
              <div className="icon-with-label"><SiExpress /><span>Express</span></div>
              <div className="icon-with-label"><FaAws /><span>AWS</span></div>
              <div className="icon-with-label"><SiTensorflow /><span>TensorFlow</span></div>
              <div className="icon-with-label"><SiOpencv /><span>OpenCV</span></div>
              <div className="icon-with-label"><SiFlask /><span>Flask</span></div>
              <div className="icon-with-label"><SiMongodb /><span>MongoDB</span></div>
            
            </div>
            <p className="rotating-title">Core Tech</p>
          </div>

          <div className="tech-badges">
            {remainingSkills.map((skill, idx) => (
              <div className="badge" key={idx}>
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
