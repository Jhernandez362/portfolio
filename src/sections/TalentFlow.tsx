import { TALENTFLOW } from '../data/talentflow'
import './TalentFlow.css'

function TalentFlow() {
  return (
    <section id="current-project" className="talentflow">
      <h2 className="talentflow__heading">Current Project</h2>

      <div className="talentflow__intro">
        <span className="talentflow__status">{TALENTFLOW.status}</span>
        <h3 className="talentflow__name">{TALENTFLOW.name}</h3>
        <p className="talentflow__description">{TALENTFLOW.description}</p>

        <ul className="talentflow__tech" aria-label="Confirmed tech stack">
          {TALENTFLOW.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <div
        className="talentflow__diagram"
        role="list"
        aria-label="TalentFlow system flow, from CV intake to human review"
      >
        {TALENTFLOW.flow.map((step, index) => (
          <div className="talentflow__step-group" key={step}>
            <div className="talentflow__step" role="listitem">
              <span className="talentflow__step-index">{index + 1}</span>
              <span>{step}</span>
            </div>
            {index < TALENTFLOW.flow.length - 1 && (
              <span className="talentflow__arrow" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <p className="talentflow__disclaimer">
        TalentFlow is under active development. The diagram above reflects
        the current architecture, not a finished product.
      </p>
    </section>
  )
}

export default TalentFlow
