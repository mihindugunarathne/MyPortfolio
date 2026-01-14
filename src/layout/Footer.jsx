import React from 'react'
import './Footer.css'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      {/* Back to Top Button */}
      <div className="footer-back-to-top">
        <button
          onClick={scrollToTop}
          className="footer-back-to-top-btn"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined">arrow_upward</span>
          <span>Back to Top</span>
        </button>
      </div>

      <div className="footer-inner">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Left: Identity & Tagline */}
          <div className="footer-identity">
            <h2 className="footer-name">MG.dev</h2>
            <p className="footer-tagline">
              Building scalable software solutions with clean code and modern architecture.
            </p>
          </div>

          {/* Right: Navigation Links */}
          <nav className="footer-nav">
            <a href="#about" className="footer-nav-link">
              About
            </a>
            <a href="#projects" className="footer-nav-link">
              Projects
            </a>
            <a href="#education" className="footer-nav-link">
              Education
            </a>
            <a href="#contact" className="footer-nav-link footer-nav-link-icon">
              <span className="material-symbols-outlined">terminal</span>
              <span>Contact</span>
            </a>
          </nav>
        </div>

        {/* Separator */}
        <div className="footer-separator"></div>

        {/* Bottom: Socials & Copyright */}
        <div className="footer-bottom">
          {/* Copyright & Tech Stack */}
          <div className="footer-copyright">
            <p>© 2024 MG.dev. All Rights Reserved.</p>
            <span className="footer-copyright-dot"></span>
            <p className="footer-built-with">
              Built with <span className="footer-built-with-accent">React</span>{' '}
              <span className="footer-built-with-separator">&amp;</span> CSS
            </p>
          </div>

          {/* Social Icons */}
          <div className="footer-socials">
            <a
              href="#"
              aria-label="GitHub"
              className="footer-social-link"
            >
              <span className="material-symbols-outlined">code_blocks</span>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <span className="material-symbols-outlined">work</span>
            </a>
            <a
              href="#"
              aria-label="Twitter/X"
              className="footer-social-link"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href="#"
              aria-label="Email"
              className="footer-social-link"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

