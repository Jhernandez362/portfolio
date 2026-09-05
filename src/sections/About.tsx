import { ABOUT } from '../data/profile'
import { WebIcon, MobileIcon, XrIcon, LanguageIcon } from './AboutIcons'
import './About.css'

const FOCUS_AREA_ICONS: Record<string, typeof WebIcon> = {
  Web: WebIcon,
  Mobile: MobileIcon,
  'XR / VR': XrIcon,
}

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__heading">About</h2>

      <div className="about__grid">
        <div className="about__bio">
          <p>{ABOUT.bio}</p>
        </div>

        {ABOUT.focusAreas.map((area) => {
          const Icon = FOCUS_AREA_ICONS[area.title]
          return (
            <div className="about__card" key={area.title}>
              <span className="about__card-icon">
                <Icon />
              </span>
              <h3>{area.title}</h3>
              <p className="about__card-description">{area.description}</p>
              <p className="about__card-stack">{area.stack.join(' · ')}</p>
            </div>
          )
        })}

        <div className="about__card about__card--languages">
          <span className="about__card-icon">
            <LanguageIcon />
          </span>
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
