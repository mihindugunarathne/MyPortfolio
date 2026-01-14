import React from 'react'
import './EducationSection.css'

function EducationSection() {
  const RESUME_URL = '/resume.pdf' // place your resume file as public/resume.pdf

  return (
    <section id="education" className="education-section">
      <div className="education-inner">
        <header className="education-header">
          <div className="education-header-title">
            <h2>Education</h2>
            <div className="education-header-bar" />
          </div>
          <p>
          My academic background and professional training that built a strong foundation in 
          software engineering through both theory and hands-on projects.
          </p>
        </header>

        <div className="education-timeline">
          <div className="education-line" />

          <article className="education-item">
            <div className="education-marker">
              <div className="education-avatar">
                <div
                  className="education-avatar-image"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-bI2CZdY0sSVJ6KjsYsGHW-qbO9KktOBCpTnuIAmUYwh2lw01er6rcXNKdaO5ZK_3b3uVqlMv-aKmzN_mf0eddErkUjMGRkxuMpnGI0FIOmF5otvUBHFpd-1KIP7cc3-FbnPwX3F_F96SPgWmtEIOcHzcBUXjF4sZimmuaB7VcX5mQAyv-zmJoLhrBWuR7APKzAWJe-tmpzG3tWIfq2-dJIrR3hTec9pcYTT208giTtmqyTanyf52eMwu_umWaXIbI7kYNPmDht0')",
                  }}
                />
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-header">
                <div>
                  <h3>Bachelor of Science in Software Engineering</h3>
                  <p className="education-school">Sri Lanka Technological Campus</p>
                </div>
                <span className="education-pill">Expected December 2026</span>
              </div>

              <div className="education-tags-block">
                <p className="education-tags-title">Relevant Coursework:</p>
                <div className="education-tags">
                  <span>Data Structures &amp; Algorithms</span>
                  <span>Database Systems</span>
                  <span>Web Architecture</span>
                  <span>Operating Systems</span>
                  <span>Cloud Computing</span>
                </div>
              </div>
            </div>
          </article>

          <article className="education-item">
            <div className="education-marker">
              <div className="education-avatar">
                <div
                  className="education-avatar-image"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRgLsGSCK0jcDP4rJmDMr61NjIzLkcutISHgtXThDjd_DpfB7L-X8wSXg07qnCJEKV3KWIPjvNitan9iX08P_-tMzW-zkEVuqrKvTnQN_VrCWzKQVkLW4KKgfi_YU4HhlIeSQvbvlEQ77jNZM8OFz6eIv5Y8aIxHLhDjLBjAXnCsecAwVP7_44bfjIRkhtPnhPapT84LtlxUd-MB9BCweT82Z-YdyyoKn1rP4L-0aUWVWdv2TfVz5bBWDE2HBXUK7rOVjPE7RsGt8')",
                  }}
                />
              </div>
            </div>

            <div className="education-card">
              <div className="education-card-header">
                <div>
                  <h3>Full-Stack Web Development Certification</h3>
                  <p className="education-school">STEM Link</p>
                </div>
                <span className="education-pill education-pill-muted">Completed 2025</span>
              </div>

              <p className="education-description">
              An intensive full-stack program focused on modern web development using the MERN stack. Gained hands-on experience 
              by building complete full-stack applications in real-world development environments.
              </p>

              <div className="education-tags-block">
                <p className="education-tags-title">Key Skills Gained:</p>
                <div className="education-tags">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>REST APIs</span>
                  <span>Git/GitHub</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="education-cta">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary education-cta-btn"
          >
            <span className="material-symbols-outlined">download</span>
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default EducationSection

