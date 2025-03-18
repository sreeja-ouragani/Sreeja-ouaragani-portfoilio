import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    console.log("Dark mode state:", darkMode); // ✅ Debugging

    // ✅ Apply or remove dark mode class on body
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

    // ✅ Save user preference
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="header">
      <div className="container flex">
        <h1 className="logo">MyPortfolio</h1>

        <div className="spacer"></div>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* ✅ Dark Mode Toggle Button */}
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* ✅ Mobile Menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </header>
  );
};

export default Header;
