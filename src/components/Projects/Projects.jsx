import React from 'react';

const Projects = () => {
  const projectsList = [
    {
      title: "Simple Quadruped Robot Dog",
      description: "3D mechanical design, joint torque estimations, and creep walking gait configuration for a 4-legged robotic dog.",
      link: "https://github.com/R-alhazmi/robotic_dog_design"
    },
    {
      title: "AI vs Real Image Classifier",
      description: "Image classification model trained using Teachable Machine and deployed via Google Colab with custom output modifications.",
      link: "https://github.com/R-alhazmi/Image_recognition_model"
    },
    {
      title: "3D Symmetrical Heart Model",
      description: "Parametric 3D CAD modeling and symmetrical structural design created using Onshape.",
      link: "https://github.com/R-alhazmi/3D_Design"
    },
    {
      title: "4 Servo Motor Sweeping simulation",
      description: "Simulation and control pipeline for multi-axis sweeping motion using four synchronized servo motors.",
      link: "https://github.com/R-alhazmi/4_servo_motors_sweeping_simulation"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">GitHub Projects</h2>
      
      <div className="projects-grid">
        {projectsList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="repo-btn">
              View Repository →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;