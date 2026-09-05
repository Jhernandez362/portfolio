import { TRAINING_TILES } from '../data/projects'
import ProfessionalWork from './ProfessionalWork'
import './Work.css'

function Work() {
  return (
    <section id="work" className="work">
      <h2 className="work__heading">Work</h2>

      <article className="project-featured">
        <div className="project-featured__visual">
          {TRAINING_TILES.screenshots.map((screenshot, index) => (
            <div
              key={screenshot.src}
              className={
                index === 0
                  ? 'project-featured__screenshot project-featured__screenshot--main'
                  : 'project-featured__screenshot'
              }
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width={index === 0 ? 1280 : 960}
                height={index === 0 ? 720 : 720}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="project-featured__info">
          <span className="project-featured__badge">
            {TRAINING_TILES.badge}
          </span>
          <h3 className="project-featured__title">{TRAINING_TILES.name}</h3>

          <ul className="project-featured__tech" aria-label="Technologies used">
            {TRAINING_TILES.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <p className="project-featured__description">
            {TRAINING_TILES.description}
          </p>

          <a
            href={TRAINING_TILES.url}
            className="project-featured__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Steam
          </a>
        </div>
      </article>

      <ProfessionalWork />
    </section>
  )
}

export default Work
