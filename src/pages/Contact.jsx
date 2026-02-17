import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

const icons = {
  email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m3.5 7.5 8.5 6 8.5-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5V19c-2.9.6-3.5-1.2-3.5-1.2-.4-1-.9-1.3-.9-1.3-.8-.6 0-.6 0-.6.9.1 1.4 1 1.4 1 .8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.3-2.3-.3-4.7-1.1-4.7-5A4 4 0 0 1 7 7.6c-.1-.3-.5-1.4.1-3 0 0 .8-.3 3 .9a10 10 0 0 1 5.4 0c2.2-1.2 3-.9 3-.9.6 1.6.2 2.7.1 3a4 4 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.2 3.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM3.8 8h2.8v12H3.8V8Zm5 0h2.7v1.7h.1c.4-.7 1.3-2 3.2-2 3.3 0 3.9 2.1 3.9 4.9V20h-2.9v-6.4c0-1.5 0-3.5-2.1-3.5s-2.5 1.7-2.5 3.4V20H8.8V8Z"
        fill="currentColor"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.2"
        y="3.2"
        width="17.6"
        height="17.6"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  ),
}

function Contact() {
  const { email, socials } = personalInfo
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('idle')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormStatus('submitted')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="page">
      <div className="section-heading">
        <p className="eyebrow">Let&apos;s Connect</p>
        <h1>Contact</h1>
      </div>

      <div className="contact-grid">
        <a className="glass contact-card" href={`mailto:${email}`}>
          <div className="contact-card-head">
            <span className="contact-icon">{icons.email}</span>
            <h2>Email</h2>
          </div>
          <p>{email}</p>
        </a>

        <a className="glass contact-card" href={socials.github} target="_blank" rel="noreferrer">
          <div className="contact-card-head">
            <span className="contact-icon">{icons.github}</span>
            <h2>GitHub</h2>
          </div>
          <p>Nischal373</p>
        </a>

        <a className="glass contact-card" href={socials.linkedin} target="_blank" rel="noreferrer">
          <div className="contact-card-head">
            <span className="contact-icon">{icons.linkedin}</span>
            <h2>LinkedIn</h2>
          </div>
          <p>lamanischal</p>
        </a>

        <a className="glass contact-card" href={socials.instagram} target="_blank" rel="noreferrer">
          <div className="contact-card-head">
            <span className="contact-icon">{icons.instagram}</span>
            <h2>Instagram</h2>
          </div>
          <p>nischal.tsuki</p>
        </a>
      </div>

      <article className="glass content-card feedback-card">
        <h2>Feedback Form</h2>
        <p className="feedback-intro">
          Share your feedback, collaboration ideas, or project inquiries.
        </p>

        <form className="feedback-form" onSubmit={handleSubmit}>
          <label className="field-label" htmlFor="name">
            Full Name
          </label>
          <input
            className="field-input"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />

          <label className="field-label" htmlFor="email">
            Email
          </label>
          <input
            className="field-input"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            required
          />

          <label className="field-label" htmlFor="subject">
            Subject
          </label>
          <input
            className="field-input"
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="What is this about?"
            required
          />

          <label className="field-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="field-input field-textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message here..."
            required
          />

          <button type="submit" className="btn btn-primary feedback-submit">
            Send Feedback
          </button>

          {formStatus === 'submitted' && (
            <p className="feedback-success">Thanks! Your feedback has been recorded.</p>
          )}
        </form>
      </article>
    </section>
  )
}

export default Contact
