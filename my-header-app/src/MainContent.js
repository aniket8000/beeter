import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="text-container">
        <h1>Mortgages made simple</h1>
        <button className="cta-button">Start my approval</button>
        <p>3 min | No credit impact</p>
        <div className="reviews">
          <span className="stars">⭐️⭐️⭐️⭐️⭐️</span>
          <span>4.6 Stars | 3177 Google reviews</span>
        </div>
      </div>
      <div className="image-container">
        <img src="my-header-app\public\images\Screenshot 2024-08-05 190506.png" alt="Mortgages" />
      </div>
    </main>
  );
};

export default MainContent;
