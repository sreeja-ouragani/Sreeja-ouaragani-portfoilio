import React, { useState, useEffect, useRef } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [animate, setAnimate] = useState(false);
  const contactRef = useRef(null);
  const hasAnimated = useRef(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://1p9cdv4qm4.execute-api.us-east-1.amazonaws.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch (error) {
      setStatus("⚠️ Error sending email.");
    }
  };

  useEffect(() => {
    const handleContactClick = () => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100);
      hasAnimated.current = true;
    };

    const contactBtn = document.querySelector('a[href="#contact"]');
    if (contactBtn) {
      contactBtn.addEventListener("click", handleContactClick);
    }

    // ✅ Intersection Observer for scroll-based trigger
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setAnimate(true);
          hasAnimated.current = true;
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactBtn) contactBtn.removeEventListener("click", handleContactClick);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <section className={`contact ${animate ? "fade-in" : ""}`} id="contact" ref={contactRef}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
};

export default Contact;
