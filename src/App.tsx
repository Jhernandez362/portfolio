import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import './App.css'

const PLACEHOLDER_SECTIONS = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        {PLACEHOLDER_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="placeholder-section"
          >
            <h2>{section.label}</h2>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
