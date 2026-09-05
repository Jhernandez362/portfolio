import { ABOUT } from '../data/profile'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>

      <div className="about__grid">
        <div className="about__bio">
          <p>{ABOUT.bio}</p>
        </div>

        {ABOUT.focusAreas.map((area) => (
          <div className="about__card" key={area}>
            <h3>{area}</h3>
          </div>
        ))}

        <div className="about__card about__card--languages">
          <h3>Languages</h3>
          <ul>
            {ABOUT.languages.map((lang) => (
              <li key={lang.name}>
                {lang.name} <span>{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
