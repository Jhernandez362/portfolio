import { PROFILE } from '../data/profile'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <span className="footer__brand">JD.</span>

        <ul className="footer__social">
          <li>
            <a
              href={PROFILE.social.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={PROFILE.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <p className="footer__copyright">
        &copy; {new Date().getFullYear()} JD.
      </p>
    </footer>
  )
}

export default Footer
