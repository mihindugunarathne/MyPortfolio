import React from 'react'
import './ProjectsSection.css'

const projects = [
  {
    id: 1,
    title: 'Handyman Service Web Application',
    description: 'A service-booking platform that connects customers with local service providers using a modern and responsive interface.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj1Rw7CPvLeRy2C1ob7SElJex27R8OsszSqoEpPyiiYKy4sLFPd5O_BlgDLIAyGE2s-7eURP0c63ZgB0xYNssjjHXv3SzE201CuzppKWPUe78DW4WqzBXfCGe-JpFNkXoI3ghAP9boEmTCgtiZVoWmysrQgjmAFVZQgsM3r8b3GYxekx0yuwz5IRLvhAA9g0OxOTXoJtLqdqKtuFyPeMjA1iI5FDxZt7A1Uyt01UQu6OzfXnPpPvxnIoeVpiItcgORz8OYI8RBvAU',
    tech: ['React', 'Node.js', 'TypeScript'],
    githubLink: '#',
    demoLink: 'https://fix-frontend.netlify.app',
    demoText: 'Live Site'
  },
  {
    id: 2,
    title: 'Food Delivery Web Application',
    description: 'A complete MERN stack food delivery platform with online payments, order tracking, and an admin management panel.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyBSz4ypP_1LQa_i_zGuLa86MVnI-SDj32Kj52e-_x1Y2skDAyrzSe5te1BFCJ6DauXAyyDaQ14L9CMsh94EQL077d4gIZwhIYX89RObpGpfCMOiFBA6Qgsh1rm6SeMJ3gXfE9B2Og3v4G-nrsWyN6xmRdmMjBEPO0NipTNtERtohd8K8WsEOt29z_vDYWangjuSPNKHzB040pZCBpu1def-NVMkt8aQ8fwTeoFVnd5JkxlstHeG0IF6oleROCiEJ79gE33iVfEOQ',
    tech: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/mihindugunarathne/Food-Delivary',
    demoLink: '#',
    demoText: 'Live Docs'
  },
  {
    id: 3,
    title: 'AI Article Summary Chrome Extension',
    description: 'A Chrome extension that uses AI to generate quick and accurate summaries of web articles in multiple formats.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD68Rt0yfOLMCeQtbzBZxrtE0uFhBgU2npLruRY6lhv-CArTngPQKthDh0lFpf6PhaTo8HzL17Ga9OLxws6LymlJ88KijxJyAxB26yTXoyu4E3M5O2ve4Uzrh5Itk9WBpz86UHdc5ykemSDCrK-BZLQ7MNltBP-HAD9jItqH_dKVUZZB_TwttG9JMjh5SKMUAKxfNpMhmeRLvZMuH54CfxKC4YpACcYtuQo9hs3I60cp3iISrxfaAiGhRA121RIL_UQ33LTFsS-O74',
    tech: ['JavaScript', 'Chrome Extensions API', 'Google Gemini AI'],
    githubLink: 'https://github.com/mihindugunarathne/Extention',
    demoLink: '#',
    demoText: 'Live Site'
  },
  {
    id: 4,
    title: 'Promotion Management System',
    description: 'A secure full-stack web application for managing promotions with authentication, role-based access, and image upload support.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj1Rw7CPvLeRy2C1ob7SElJex27R8OsszSqoEpPyiiYKy4sLFPd5O_BlgDLIAyGE2s-7eURP0c63ZgB0xYNssjjHXv3SzE201CuzppKWPUe78DW4WqzBXfCGe-JpFNkXoI3ghAP9boEmTCgtiZVoWmysrQgjmAFVZQgsM3r8b3GYxekx0yuwz5IRLvhAA9g0OxOTXoJtLqdqKtuFyPeMjA1iI5FDxZt7A1Uyt01UQu6OzfXnPpPvxnIoeVpiItcgORz8OYI8RBvAU',
    tech: ['Spring Boot', 'React', 'MySQL'],
    githubLink: 'https://github.com/mihindugunarathne/Promotion-Management-System',
    demoLink: '#',
    demoText: 'Live Demo'
  },
  {
    id: 5,
    title: 'Flutter Book Store App',
    description: 'A mobile application that allows users to browse books, view details, and manage a shopping cart.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj1Rw7CPvLeRy2C1ob7SElJex27R8OsszSqoEpPyiiYKy4sLFPd5O_BlgDLIAyGE2s-7eURP0c63ZgB0xYNssjjHXv3SzE201CuzppKWPUe78DW4WqzBXfCGe-JpFNkXoI3ghAP9boEmTCgtiZVoWmysrQgjmAFVZQgsM3r8b3GYxekx0yuwz5IRLvhAA9g0OxOTXoJtLqdqKtuFyPeMjA1iI5FDxZt7A1Uyt01UQu6OzfXnPpPvxnIoeVpiItcgORz8OYI8RBvAU',
    tech: ['Flutter', 'Dart', 'Provider'],
    githubLink: 'https://github.com/mihindugunarathne/BookStore',
    demoLink: '#',
    demoText: 'Live Demo'
  }
]

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <div className="projects-header-inner">
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-subtitle">
            A selection of my recent work in full-stack engineering, API development, and UI design.
          </p>
          <div className="projects-divider" />
        </div>
      </div>

      <div className="projects-container">
        <div className="projects-scroll-container">
          <div className="projects-grid">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card"
              >
              <div className="project-image-wrapper">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.image})` }}
                  aria-label={`${project.title} preview`}
                />
                <div className="project-image-overlay" />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-footer">
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <button 
                      className="project-btn project-btn-secondary"
                      onClick={() => {
                        if (project.githubLink && project.githubLink !== '#') {
                          window.open(project.githubLink, '_blank', 'noopener,noreferrer')
                        }
                      }}
                    >
                      <span className="material-symbols-outlined">code</span>
                      <span>GitHub</span>
                    </button>
                    <button 
                      className="project-btn project-btn-primary"
                      onClick={() => {
                        if (project.demoLink && project.demoLink !== '#') {
                          window.open(project.demoLink, '_blank', 'noopener,noreferrer')
                        }
                      }}
                    >
                      <span className="material-symbols-outlined">visibility</span>
                      <span>{project.demoText}</span>
                    </button>
                  </div>
                </div>
              </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="projects-cta">
        <button onClick={() => window.open('https://github.com/mihindugunarathne', '_blank')} className="projects-view-all-btn">
          <span className="material-symbols-outlined">arrow_forward</span>
          <span>View All Projects on GitHub</span>
        </button>
      </div>
    </section>
  )
}

export default ProjectsSection
