import { PROFILE } from '../data/profile'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__role">{PROFILE.role}</p>
        <h1 className="hero__name">{PROFILE.name}</h1>
        <p className="hero__tagline">{PROFILE.tagline}</p>

        <ul className="hero__stack" aria-label="Featured tech stack">
          {PROFILE.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="hero__actions">
          <a href="#work" className="hero__cta hero__cta--primary">
            Explore my work
          </a>
          <a
            href={PROFILE.social.github}
            className="hero__cta hero__cta--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/cv.pdf"
            className="hero__cta hero__cta--secondary"
            download
          >
            Download CV
          </a>
        </div>

        <a
          href={PROFILE.social.linkedin}
          className="hero__linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>

      <div className="hero__visual-placeholder">
        <p>Photo placeholder</p>
      </div>
    </section>
  )
}

export default Hero
