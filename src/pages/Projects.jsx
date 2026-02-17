import ProjectCard from '../components/ProjectCard'
import { featuredProjects, personalInfo } from '../data/portfolioData'

function Projects() {
  return (
    <section className="page">
      <div className="section-heading">
        <p className="eyebrow">Featured Work</p>
        <h1>Projects</h1>
      </div>

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="projects-more-wrap">
        <a
          href={personalInfo.socials.github}
          target="_blank"
          rel="noreferrer"
          className="btn btn-secondary"
        >
          See More on GitHub
        </a>
      </div>
    </section>
  )
}

export default Projects
