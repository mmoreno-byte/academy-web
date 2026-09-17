import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Courses from './components/Courses'
import Process from './components/Process'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
