import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="landing-dashboard">
      {/* Navigation Header */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">🛡️</div>
            <h2>Safe-Roam</h2>
          </div>
          <div className="nav-buttons">
            <Link to="/login" className="nav-btn login-btn">Login</Link>
            <Link to="/register" className="nav-btn register-btn">Register</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Smarter, Safer Journeys 
            </h1>
            <p className="hero-subtitle">
              Real-time safety alerts, fraud detection & secure travel.
            </p>
            <div className="hero-cta">
              <Link to="/register" className="cta-btn primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
