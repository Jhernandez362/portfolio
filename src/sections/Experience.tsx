import { EXPERIENCE } from '../data/experience'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="experience__heading">Experience</h2>

      <article className="experience__card">
        <header className="experience__header">
          <h3 className="experience__company">{EXPERIENCE.company}</h3>
          <p className="experience__role">{EXPERIENCE.role}</p>
          <p className="experience__location">{EXPERIENCE.location}</p>
        </header>

        <ul className="experience__highlights">
          {EXPERIENCE.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default Experience
