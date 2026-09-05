import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  return (
    <>
      <Navbar />
      <main>
        {SECTIONS.map((section) => (
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
