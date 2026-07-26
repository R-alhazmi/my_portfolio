import React from 'react';

const Navbar = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Portfolio</h2>
      </div>
      <ul>
        <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Me</a></li>
        <li><a href="#interests" onClick={(e) => scrollToSection(e, 'interests')}>Interests</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>GitHub Projects</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;