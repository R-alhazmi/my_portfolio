import React from 'react';
import './RobotLoader.scss';

const RobotLoader = () => {
  return (
    <div className="robot-loader-container">
      <div className="robot">
        <div className="antenna">
          <div className="light"></div>
        </div>
        
        <div className="head">
          <div className="ear left"></div>
          <div className="ear right"></div>
          
          <div className="face">
            <div className="eye left"></div>
            <div className="eye right"></div>
            <div className="mouth"></div>
          </div>
        </div>

        <div className="body">
          <div className="chest-screen">
            <span className="code-dot"></span>
            <span className="code-dot"></span>
            <span className="code-dot"></span>
          </div>
        </div>
      </div>
      
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default RobotLoader;