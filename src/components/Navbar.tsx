import { useState } from 'react'
import { PROFILE } from '../data/profile'
import './Navbar.css'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <nav className="navbar__nav" aria-label="Main navigation">
        <a href="#home" className="navbar__brand" onClick={closeMenu}>
          JD.
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-icon" aria-hidden="true" />
        </button>

        <ul
          id="navbar-menu"
          className={`navbar__menu${isMenuOpen ? ' navbar__menu--open' : ''}`}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PROFILE.cvUrl}
              className="navbar__cta"
              download
              onClick={closeMenu}
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
