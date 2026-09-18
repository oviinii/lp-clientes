import { useLenis } from './lib/useLenis'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Pillars } from './sections/Pillars'
import { Services } from './sections/Services'
import { EgbeEgungun } from './sections/EgbeEgungun'
import { ContactCTA } from './sections/ContactCTA'
import { Footer } from './components/Footer'

function App() {
  useLenis()

  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Pillars />
        <Services />
        <EgbeEgungun />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App