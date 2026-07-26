import React from 'react';

const Interests = () => {
  const interestsList = [
    { title: "Artificial Intelligence", icon: "🤖" },
    { title: "Machine Learning", icon: "🧠" },
    { title: "Autonomous Navigation", icon: "🧭" },
    { title: "Data Science & Analytics", icon: "📊" },
    { title: "Web Development", icon: "💻" }
  ];

  return (
    <section id="interests" className="interests-section">
      <h2 className="section-title">Interests</h2>
      <div className="interests-grid">
        {interestsList.map((item, index) => (
          <div className="interest-card" key={index}>
            <span className="card-icon">{item.icon}</span>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;