import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-grid">
        <div className="skills-card">
          <div className="card-header">
            <span className="card-icon">💻</span>
            <h3>Programming & Querying</h3>
          </div>
          <div className="skills-list">
            <span>Python</span>
            <span>SQL</span>
            <span>Java</span>
          </div>
        </div>

        <div className="skills-card">
          <div className="card-header">
            <span className="card-icon">⚙️</span>
            <h3>Data Processing & Analysis</h3>
          </div>
          <div className="skills-list">
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Scikit-Learn</span>
          </div>
        </div>

        <div className="skills-card">
          <div className="card-header">
            <span className="card-icon">📊</span>
            <h3>Data Visualization Tools</h3>
          </div>
          <div className="skills-list">
            <span>Tableau</span>
            <span>Power BI</span>
            <span>Matplotlib</span>
            <span>Seaborn</span>
            <span>Plotly</span>
          </div>
        </div>

        <div className="skills-card">
          <div className="card-header">
            <span className="card-icon">🗄️</span>
            <h3>Databases & Environment</h3>
          </div>
          <div className="skills-list">
            <span>SQL Server</span>
            <span>Oracle</span>
            <span>Git / GitHub</span>
            <span>Jupyter Notebook</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;