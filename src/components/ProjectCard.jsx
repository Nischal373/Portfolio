function ProjectCard({ project }) {
  return (
    <article className="glass project-card">
      <img
        src={project.image}
        alt={`${project.title} demo preview`}
        className="project-demo-image"
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-group" aria-label={`${project.title} technologies`}>
        {project.tech.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="text-link">
        View on GitHub
      </a>
    </article>
  )
}

export default ProjectCard
