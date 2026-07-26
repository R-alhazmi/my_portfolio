import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-intro">
        <p>I am a dedicated Data Science student with a strong passion for exploring, cleaning, and analyzing complex datasets. Skilled in statistical modeling, predictive analytics, and crafting interactive visual stories that help transform data into actionable strategies.</p>
      </div>

      <div className="about-grid">
        <div className="about-item">
          <span className="item-icon">📊</span>
          <h3>Data Visualization</h3>
          <p>Building interactive dashboards and meaningful charts to tell the story behind the numbers.</p>
        </div>

        <div className="about-item">
          <span className="item-icon">🗄️</span>
          <h3>Database Management</h3>
          <p>Writing efficient queries and managing relational database management systems seamlessly.</p>
        </div>

        <div className="about-item">
          <span className="item-icon">🤖</span>
          <h3>Predictive Modeling</h3>
          <p>Applying machine learning algorithms to uncover patterns and forecast future trends.</p>
        </div>
      </div>
    </section>
  );
};

export default About;