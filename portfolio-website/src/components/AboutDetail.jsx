import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "../styles/about-detail.css";
import myPhoto from "../assets/my-photo.png";

const AboutDetail = () => {
  return (
    <section className="about-detail-section">
      <div className="about-detail-container">
        {/* ✅ Back Button */}
        <Link to="/" className="back-button">
          ⬅ Back to Portfolio
        </Link>

        {/* ✅ Left: Profile Image */}
        <div className="profile-image-wrapper">
          <img src={myPhoto} alt="Sreeja Profile" loading="lazy" />
        </div>

        {/* ✅ Right: Info Card */}
        <div className="about-detail-card">
          <h2>About Me</h2>

          <p className="intro">
            I’m a passionate Full-Stack Developer focused on React, Next.js,
            Node.js, and AI/ML solutions. I enjoy building impactful products
            with scalable architectures and cloud integration.
          </p>

          <div className="detail-section">
            <h3>Languages</h3>
            <p>Telugu, Hindi, English</p>
          </div>

          <div className="detail-section">
            <h3>Education</h3>
            <p>
              B.Tech in CSE (AI & ML), Malla Reddy University — CGPA: 8.92 (Till 5th Sem)
            </p>
          </div>

          <div className="detail-section">
            <h3>Technical Interests</h3>
            <p>AI & ML, MERN Stack, Competitive Programming, AWS Cloud</p>
          </div>

          <div className="detail-section">
            <h3>Achievements</h3>
            <ul>
              <li>🏆 5+ National Hackathon Participations (AI, EdTech, Cyber)</li>
              <li>🎨 Poster Designing Runner-up</li>
              <li>🕺 Dance Competition Winner</li>
              <li>👩‍💼 Class Representative – CSE(AI & ML)</li>
              <li>📢 Coordinator – Tech Events & Webinars</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Career Projects</h3>
            <ul>
              <li>
                🚀 <strong>AmsterdamLore.com</strong> (submitted to Career alatree Ventures Team)
                <br />
                <a
                  href="https://amsterdamlore-ouragani-sreeja.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo: amsterdamlore-ouragani-sreeja.vercel.app
                </a>
                <ul style={{ marginTop: "8px", paddingLeft: "20px" }}>
                  <li>🎫 Raffle system for exclusive Amsterdam experiences</li>
                  <li>🔗 Topic of the Week linked to CareDuel content</li>
                  <li>🧩 Built-in API routes with serverless Next.js</li>
                  <li>📱 Fully responsive UI (Tailwind CSS + Inline styles)</li>
                  <li>🌐 Deployed on Vercel with serverless functions</li>
                </ul>
              </li>
              <li>📘 NPTEL Java Certification — Qualified with 50%</li>
            </ul>
          </div>

          <div className="detail-section">
            <h3>Tools & Platforms</h3>
            <p>
              Git, GitHub, Vercel, Render, Postman, Figma, MongoDB Atlas, Google Colab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetail;
