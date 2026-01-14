import React from 'react'
import './Header.css'

function Header() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo-group">
          <div className="logo-icon">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <h2 className="logo-text">
            MG<span className="logo-accent">.dev</span>
          </h2>
        </div>

        <nav className="main-nav">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        <div className="header-cta">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        <button className="menu-button" aria-label="Open navigation">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  )
}

export default Header

