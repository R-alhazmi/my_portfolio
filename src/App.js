import React, { useState, useEffect } from 'react';
import RobotLoader from './components/RobotLoader/RobotLoader';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Interests from './components/Interests/Interests';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contacts/Contacts';
import './App.scss';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <RobotLoader />;
  }

  return (
    <div className="portfolio-app">
      <Navbar />
      <main className="content">
        <Home />
        <About />
        <Interests />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;