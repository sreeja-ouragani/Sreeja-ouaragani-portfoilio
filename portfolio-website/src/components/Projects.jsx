import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css"; // No Link used, so removed it

const videoProjects = [
  {
    title: "DailyDevHub",
    description: "A productivity dashboard for developers.",
    video: "/videos/dailydevhub.mp4",
    link: "https://dailydevhub-codeconquer.vercel.app/",
  },
  {
    title: "FAQ Generation System",
    description: "AI-powered FAQ generator using NLP.",
    video: "",
    link: "https://github.com/sreeja-ouragani/FAQ-system",
  },
  {
    title: "Image Segmentation and Captioning",
    description: "AI system for segmenting and describing images.",
    video: "/videos/image.mp4",
    link: "https://github.com/sreeja-ouragani/Image-Segmentation-and-Captioning",
  },
  {
    title: "ToDo Journal App",
    description: "Replit-based ToDo journaling app.",
    video: "",
    link: "https://github.com/sreeja-ouragani/todo-journal-app",
  },
  {
    title: "Gaze Tracking System",
    description: "Tracks eye gaze using webcam and OpenCV.",
    video: "",
    link: "https://github.com/sreeja-ouragani/GazeTracking",
  },
  {
    title: "AI Vision Pro",
    description: "Eye health and vision estimation tool.",
    video: "",
    link: "https://github.com/sreeja-ouragani/AI-VisionMate",
  },
];

const Projects = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const handleNavigation = () => {
      if (window.location.hash === "#projects") {
        setAnimationKey((prevKey) => prevKey + 1);
      }
    };
    window.addEventListener("hashchange", handleNavigation);
    return () => window.removeEventListener("hashchange", handleNavigation);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && video?.play) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, observerOptions);

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [animationKey]);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.h2
          key={`title-${animationKey}`}
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Projects
        </motion.h2>

        <div className="projects-grid">
          {videoProjects.map((project, index) => (
            <motion.div
              key={`card-${animationKey}-${index}`}
              className="project-video-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="video-wrapper">
                {project.video ? (
                  <video
                    className="video-player"
                    controls
                    muted
                    preload="metadata"
                    poster="/images/video-poster.jpg"
                    ref={(el) => (videoRefs.current[index] = el)}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="video-placeholder">
                    <p>Video coming soon</p>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔗 View More Projects Button */}
        <div className="more-projects-btn">
          <a href="/more-projects" target="_blank" rel="noopener noreferrer">
            <button>View More Projects</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
