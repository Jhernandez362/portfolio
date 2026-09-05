import { TECH_STACK } from '../data/experience'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="skills__heading">Tech Stack</h2>

      <div className="skills__grid">
        {TECH_STACK.map((group) => (
          <div className="skills__category" key={group.category}>
            <h3>{group.category}</h3>
            <ul aria-label={`${group.category} technologies`}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
