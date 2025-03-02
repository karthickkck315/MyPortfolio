import React from 'react';
import './Achievements.css';
import { achievementsData } from '../../data/achievementsData';

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2>Achievements & Awards</h2>
      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
