import React from 'react'
import './AboutSection.css'
import mihindu2 from '../assets/mihindu2.jpg'

function AboutSection() {
  const RESUME_URL = '/resume.pdf' // place your resume file as public/resume.pdf

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <header className="about-header">
          <h2>About Me</h2>
          <p>Who I am &amp; What I do</p>
        </header>

        <div className="about-grid">
          <div className="about-left">
            <h3 className="about-title">
              Software Engineering Student &amp;{' '}
              <span className="about-title-accent">Creative Problem Solver</span>
            </h3>

            <div className="about-text">
              <p>
              I’m a Software Engineering undergraduate at Sri Lanka Technological Campus with a strong interest in backend development and full-stack web applications. 
              I enjoy building scalable systems, designing clean APIs, and working with databases to create reliable and efficient software solutions..
              </p>
              <p>
              My journey began with basic web development and scripting, and gradually evolved into building complete full-stack applications using the MERN stack and Spring Boot. 
              I’ve worked on real-world projects such as service-booking platforms, promotion management systems, and automation tools, and I’m always learning new technologies to improve my skills and write better, maintainable code.
              </p>
            </div>

            <div className="about-tech">
              <p className="about-tech-label">Technologies I Use</p>
              <div className="about-chip-row">
                <span className="about-chip">
                  <span className="material-symbols-outlined">code</span>
                  <span>React</span>
                </span>
                <span className="about-chip">
                  <span className="material-symbols-outlined">javascript</span>
                  <span>TypeScript</span>
                </span>
                <span className="about-chip">
                  <span className="material-symbols-outlined">brush</span>
                  <span>Tailwind</span>
                </span>
                <span className="about-chip">
                  <span className="material-symbols-outlined">dns</span>
                  <span>Node.js</span>
                </span>
                <span className="about-chip">
                  <span className="material-symbols-outlined">terminal</span>
                  <span>Python</span>
                </span>
                <span className="about-chip">
                  <span className="material-symbols-outlined">database</span>
                  <span>MongoDB</span>
                </span>
                <span className="about-chip">
                  <span className="material-symbols-outlined">deployed_code</span>
                  <span>Docker</span>
                </span>
              </div>
            </div>

            <div className="about-cta">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary about-resume-btn"
              >
                <span>Download Resume</span>
                <span className="material-symbols-outlined">download</span>
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="about-image-blob" />
            <div className="about-image-card">
              <div 
                className="about-image-bg" 
                style={{ backgroundImage: `url(${mihindu2})` }}
              />
            </div>
          </div>
        </div>

        <div className="about-cards">
          <article className="about-card">
            <div className="about-card-icon about-card-icon-blue">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <h3>My Tech Stack</h3>
            <p>
            Proficient in JavaScript, backend frameworks, RESTful APIs, and both SQL and NoSQL databases. 
            Focused on building reliable end-to-end web applications.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-icon about-card-icon-purple">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <h3>Currently Learning</h3>
            <p>
            Improving my skills in TypeScript, backend architecture, API design, 
            and modern full-stack development practices.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-icon about-card-icon-emerald">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3>Career Goals</h3>
            <p>
            Aspiring to grow as a Full-Stack Engineer, contributing to real-world products, 
            scalable systems, and collaborative development teams.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

