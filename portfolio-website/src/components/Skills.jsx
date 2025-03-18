import "../styles/skills.css";
import { 
  FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaHtml5, FaCss3Alt, 
  FaPhp, FaGitAlt, FaGithub, FaBrain 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiMongodb, SiMysql, SiJavascript, SiExpress, 
  SiFlask, SiPostman, SiOpencv, SiTensorflow, SiVite, SiAngular 
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "AI/ML", icon: <FaBrain /> }, // ✅ Fixed: AI/ML uses FaBrain
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
];

const additionalSkills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Angular.js", icon: <SiAngular /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "NLP", icon: <FaBrain /> }, // ✅ NLP also uses FaBrain
  { name: "Computer Vision", icon: <SiOpencv /> },
  { name: "Deep Learning", icon: <SiTensorflow /> }, // ✅ Fixed: Deep Learning uses SiTensorflow
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Postman", icon: <SiPostman /> },
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              {skill.icon} <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <h3 className="sub-title">Additional Skills</h3>
        <div className="skills-grid">
          {additionalSkills.map((skill, index) => (
            <div key={index} className="skill">
              {skill.icon} <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
