import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Work from './sections/Work'
import TalentFlow from './sections/TalentFlow'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import HowIWork from './sections/HowIWork'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <TalentFlow />
        <Experience />
        <Skills />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
