import React from 'react'
import './HeroSection.css'
import mihindu1 from '../assets/mihindu1.jpg'

function HeroSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-main">
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
      </div>

      <div className="hero-container">
        <div className="hero-layout">
          <section className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot">
                <span className="badge-dot-ping" />
                <span className="badge-dot-core" />
              </span>
              <span>Available for work</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-gradient">Mihindu </span>.
            </h1>

            <h2 className="hero-subtitle">
              Software Engineer <span className="divider">|</span>{' '}
              <span className="subtitle-muted">Full-Stack Developer</span>
            </h2>

            <p className="hero-description">
            I’m a Software Engineering undergraduate with a strong interest in backend development and automation. 
            I build scalable APIs and full-stack web applications using modern technologies.
            </p>

            <div className="hero-actions">
              <button
                className="btn btn-primary hero-primary-btn"
                onClick={() => scrollToSection('projects')}
              >
                <span>View Projects</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
            </div>

            <div className="hero-socials">
              <a href="#" aria-label="GitHub" className="social-link">
                <span className="material-symbols-outlined">code</span>
                <span className="social-label">GitHub</span>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <span className="material-symbols-outlined">work</span>
                <span className="social-label">LinkedIn</span>
              </a>
              <a href="#" aria-label="Email" className="social-link">
                <span className="material-symbols-outlined">mail</span>
                <span className="social-label">Email</span>
              </a>
            </div>
          </section>

          <section className="hero-portrait">
            <div className="portrait-glow" />
            <div className="portrait-ring">
              <div className="portrait-inner">
                <img
                  src={mihindu1}
                  alt="Portrait of Software Engineer Alex"
                  className="portrait-image"
                />
                <div className="portrait-overlay" />
              </div>

              <div className="badge badge-top-right">
                <span className="material-symbols-outlined badge-icon-primary">terminal</span>
              </div>

              <div className="badge badge-bottom-left">
                <span className="material-symbols-outlined badge-icon-accent">javascript</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

