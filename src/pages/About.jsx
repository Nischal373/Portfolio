import { education, personalInfo, skills } from '../data/portfolioData'

function About() {
  return (
    <section className="page">
      <div className="section-heading">
        <p className="eyebrow">Who I Am</p>
        <h1>About Me</h1>
      </div>

      <div className="about-layout">
        <article className="glass content-card">
          <h2>Profile</h2>
          <p>{personalInfo.about}</p>
          <p>
            <strong>Location:</strong> {personalInfo.location}
          </p>
        </article>

        <article className="glass content-card">
          <h2>Education</h2>
          {education.map((item) => (
            <div key={item.title} className="timeline-item">
              <h3>{item.title}</h3>
              <p className="muted">{item.subtitle}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </article>
      </div>

      <article className="glass content-card skills-card">
        <h2>Skills</h2>
        <div className="tag-group">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </article>
    </section>
  )
}

export default About
