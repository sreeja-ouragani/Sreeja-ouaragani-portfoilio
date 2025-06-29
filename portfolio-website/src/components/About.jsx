import React, { useState, useEffect, useRef } from "react";
import "../styles/about.css";
import myPhoto from "../assets/my-photo.png";

const About = () => {
  const [text, setText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const aboutRef = useRef(null);
  const intervalRef = useRef(null);
  const hasAnimated = useRef(false); // ✅ Prevents rerunning on every scroll

  const aboutText =
    "I'm Sreeja, a Full-Stack Developer specializing in React, Next.js, Node.js, and AI/ML integration. I have experience in building scalable web applications and cloud-based solutions. With a strong foundation in AWS, I focus on crafting optimized backend systems while delivering seamless user experiences.";

  const triggerAnimation = () => {
    setText("");
    setShowImage(false);
    let index = 0;
    let currentText = "";

    clearInterval(intervalRef.current);

    setTimeout(() => {
      setShowImage(true);
      intervalRef.current = setInterval(() => {
        if (index < aboutText.length) {
          currentText += aboutText.charAt(index);
          setText(currentText);
          index++;
        } else {
          clearInterval(intervalRef.current);
        }
      }, 30);
    }, 500);
  };

  useEffect(() => {
    // ✅ Trigger if hash is already present (direct visit or click)
    if (window.location.hash === "#about") {
      triggerAnimation();
      hasAnimated.current = true;
    }

    // ✅ Hash change handler
    const handleHashChange = () => {
      if (window.location.hash === "#about") {
        triggerAnimation();
        hasAnimated.current = true;
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    // ✅ Observer to trigger animation on scroll into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          triggerAnimation();
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.6, // Trigger when 60% of About section is visible
      }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      clearInterval(intervalRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section className="about section" id="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>

        {/* ✅ Profile Image */}
        <div className={`about-image ${showImage ? "fade-in" : ""}`}>
          <img src={myPhoto} alt="My Profile" loading="lazy" />
        </div>

        {/* ✅ Typewriter Text Card */}
        <div className="about-card">
          <p className="typewriter">{text}</p>
        </div>

        {/* ✅ Open About Detail in New Tab */}
        <a
          href="/about-detail"
          className="know-more-btn pulse"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know More?
        </a>
      </div>
    </section>
  );
};

export default About;
