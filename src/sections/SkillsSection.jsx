import React from 'react'
import './SkillsSection.css'

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <header className="skills-header">
          <h2>Technical Expertise</h2>
          <p>
            A comprehensive collection of languages, frameworks, and tools I use to build scalable
            and modern software solutions.
          </p>
        </header>

        <div className="skills-filters">
          <button className="skills-chip skills-chip-active">All</button>
          <button className="skills-chip">Frontend</button>
          <button className="skills-chip">Backend</button>
          <button className="skills-chip">DevOps</button>
          <button className="skills-chip">Tools</button>
        </div>

        <div className="skills-grid">
          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-react">
                <span className="material-symbols-outlined">data_object</span>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>
            <div>
              <h3>React</h3>
              <p>Component-based UI development with hooks and context.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '75%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-ts">
                <span className="material-symbols-outlined">javascript</span>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>
            <div>
              <h3>Java Script</h3>
              <p>Programming language for web development.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '75%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-tailwind">
                <span className="material-symbols-outlined">brush</span>
              </div>
              <span className="skill-level">Basic</span>
            </div>
            <div>
              <h3>Tailwind CSS</h3>
              <p>Rapid UI development with utility-first CSS classes.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '40%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-node">
                <span className="material-symbols-outlined">webhook</span>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>
            <div>
              <h3>Node.js</h3>
              <p>Server-side JavaScript runtime for building APIs.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '70%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-python">
                <span className="material-symbols-outlined">terminal</span>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>
            <div>
              <h3>Python</h3>
              <p>Scripting, data analysis, and backend automation.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '60%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-postgres">
                <span className="material-symbols-outlined">database</span>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>
            <div>
              <h3>MongoDB</h3>
              <p>NoSQL database for flexible data storage.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '65%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-docker">
                <span className="material-symbols-outlined">deployed_code</span>
              </div>
              <span className="skill-level">Basic</span>
            </div>
            <div>
              <h3>Docker</h3>
              <p>Containerization for consistent development environments.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '50%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-git">
                <span className="material-symbols-outlined">code</span>
              </div>
              <span className="skill-level">Basic</span>
            </div>
            <div>
              <h3>Spring Boot</h3>
              <p>Java framework for building robust backend applications.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '50%' }} />
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <div className="skill-icon skill-icon-git">
                <span className="material-symbols-outlined">account_tree</span>
              </div>
              <span className="skill-level">Intermediate</span>
            </div>
            <div>
              <h3>Git</h3>
              <p>Version control, branching strategies, and collaboration.</p>
            </div>
            <div className="skill-meter">
              <div className="skill-meter-fill" style={{ width: '80%' }} />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

