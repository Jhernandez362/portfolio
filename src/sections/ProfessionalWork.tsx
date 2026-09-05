import { PROFESSIONAL_PROJECTS } from '../data/projects'
import './ProfessionalWork.css'

function ProfessionalWork() {
  return (
    <div className="professional-work">
      <h3 className="professional-work__heading">Professional Work</h3>

      <div className="professional-work__grid">
        {PROFESSIONAL_PROJECTS.map((project) => (
          <article className="case-study" key={project.name}>
            <h4 className="case-study__title">{project.name}</h4>
            <p className="case-study__context">{project.context}</p>
            <p className="case-study__contribution">{project.contribution}</p>

            <ul
              className="case-study__tech"
              aria-label={`Technologies used in ${project.name}`}
            >
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalWork
