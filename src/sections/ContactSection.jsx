import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './ContactSection.css' 

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })




  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSending) return

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service is not configured. Please set your EmailJS environment variables.')
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Mihindu',
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey,
        }
      )

      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })

      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
  }



  return (
    <section id="contact" className="contact-section">
      <div className="contact-background-decoration" />
      
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-badge">
            <span className="contact-badge-dot" />
            Get in touch
          </span>
          <h1 className="contact-title">
            Let's Build Something <span className="contact-title-accent">Together</span>
          </h1>
          <p className="contact-subtitle">
            I'm currently open to internship opportunities and collaborative projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-channels">
            <h3 className="contact-channels-title">Connect Directly</h3>
            
            <div className="contact-channels-list">
              <a href="m" className="contact-channel-card">
                <div className="contact-channel-icon contact-channel-icon-email">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div className="contact-channel-content">
                  <span className="contact-channel-label">Email Me</span>
                  <span className="contact-channel-value">mihindupramudith@gmail.com</span>
                </div>
                <span className="material-symbols-outlined contact-channel-arrow">arrow_forward</span>
              </a>

              <a href="#" className="contact-channel-card">
                <div className="contact-channel-icon contact-channel-icon-github">
                  <span className="material-symbols-outlined">code</span>
                </div>
                <div className="contact-channel-content">
                  <span className="contact-channel-label">Check my code</span>
                  <span className="contact-channel-value">GitHub Profile</span>
                </div>
                <span className="material-symbols-outlined contact-channel-arrow">north_east</span>
              </a>

              <a href="#" className="contact-channel-card">
                <div className="contact-channel-icon contact-channel-icon-linkedin">
                  <span className="material-symbols-outlined">connect_without_contact</span>
                </div>
                <div className="contact-channel-content">
                  <span className="contact-channel-label">Let's connect</span>
                  <span className="contact-channel-value">LinkedIn Profile</span>
                </div>
                <span className="material-symbols-outlined contact-channel-arrow">north_east</span>
              </a>
            </div>

            <div className="contact-location">
              <div className="contact-location-pattern" />
              <div className="contact-location-overlay" />
              <div className="contact-location-content">
                <div className="contact-location-marker">
                  <span className="contact-location-ping" />
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="contact-location-text">Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <div className="contact-form-header">
                <h3 className="contact-form-title">Send me a message</h3>
                <p className="contact-form-subtitle">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name" className="contact-form-label">Your Name</label>
                    <div className="contact-form-input-wrapper">
                      <span className="material-symbols-outlined contact-form-icon">person</span>
                      <input
                        type="text"
                        id="name"
                        name="from_name"
                        required
                        className="contact-form-input"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">Your Email</label>
                    <div className="contact-form-input-wrapper">
                      <span className="material-symbols-outlined contact-form-icon">alternate_email</span>
                      <input
                        type="email"
                        id="email"
                        name="from_email"
                        required
                        className="contact-form-input"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="subject" className="contact-form-label">Subject</label>
                  <div className="contact-form-input-wrapper">
                    <span className="material-symbols-outlined contact-form-icon">chat_bubble_outline</span>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="contact-form-input"
                      placeholder="Project collaboration inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="contact-form-textarea"
                    placeholder="Hi, I'd like to discuss a potential internship opportunity..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contact-form-submit" disabled={isSending}>
                  <span className="material-symbols-outlined">send</span>
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>

                {status.message && (
                  <p
                    className={`contact-form-status ${
                      status.type === 'success' ? 'contact-form-status-success' : 'contact-form-status-error'
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {status.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    <span>{status.message}</span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
