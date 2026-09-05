import { PROFILE } from '../data/profile'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact__heading">Let&apos;s Build Something</h2>
      <p className="contact__subtext">
        Open to conversations about new opportunities, projects or
        collaboration — feel free to reach out.
      </p>

      <div className="contact__links">
        <a
          href={PROFILE.social.github}
          className="contact__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={PROFILE.social.linkedin}
          className="contact__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${PROFILE.social.email}`}
          className="contact__link"
        >
          Email
        </a>
        <a href="/cv.pdf" className="contact__link" download>
          Download CV
        </a>
      </div>
    </section>
  )
}

export default Contact
