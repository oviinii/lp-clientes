import { useLenis } from './lib/useLenis'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Pillars } from './sections/Pillars'
import { Services } from './sections/Services'
import { Gallery } from './sections/Gallery'
import { Process } from './sections/Process'
import { Faq } from './sections/Faq'
import { ContactCTA } from './sections/ContactCTA'
import { Footer } from './components/Footer'

function App() {
  useLenis()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Pillars />
        <Services />
        <Gallery />
        <Process />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
