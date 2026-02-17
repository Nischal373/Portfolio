import { Link } from 'react-router-dom'
import profileImage from '../assets/nischal-profile.jpg'
import { featuredProjects, personalInfo, skills } from '../data/portfolioData'

const socialIcons = {
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

function Home() {
  const focusSkills = skills.slice(0, 6)

  return (
    <section className="page hero-page">
      <div className="glass hero-card">
        <div className="hero-content">
          <p className="eyebrow">Portfolio</p>
          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.headline}</h2>
          <p className="lead">{personalInfo.intro}</p>

          <div className="cta-group">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <figure className="hero-image-wrap">
          <img src={profileImage} alt="Nischal Lama" className="hero-image" />
        </figure>
      </div>

      <div className="home-grid">
        <article className="glass content-card">
          <h2>Quick Highlights</h2>
          <div className="metric-grid">
            <div className="metric-item">
              <strong>{featuredProjects.length}+</strong>
              <span>Featured Projects</span>
            </div>
            <div className="metric-item">
              <strong>{skills.length}+</strong>
              <span>Core Skills</span>
            </div>
            <div className="metric-item">
              <strong>Open</strong>
              <span>For Collaboration</span>
            </div>
          </div>
          <p>
            I enjoy building practical systems from concept to execution with strong attention
            to performance, usability, and maintainable code.
          </p>
        </article>

        <article className="glass content-card">
          <h2>Current Focus</h2>
          <div className="tag-group">
            {focusSkills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>

          <div className="cta-group compact-cta">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary social-btn"
            >
              <span className="social-icon">{socialIcons.github}</span>
              GitHub
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary social-btn"
            >
              <span className="social-icon">{socialIcons.linkedin}</span>
              LinkedIn
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary social-btn"
            >
              <span className="social-icon">{socialIcons.instagram}</span>
              Instagram
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Home
