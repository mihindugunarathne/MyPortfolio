import React from 'react'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import EducationSection from './sections/EducationSection'
import ContactSection from './sections/ContactSection'

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      </div>
  )
}

export default App
