import { useLenis } from './lib/useLenis'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Work } from './sections/Work'
import { Process } from './sections/Process'
import { Differentials } from './sections/Differentials'
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
        <Services />
        <Work />
        <Process />
        <Differentials />
        <Faq />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
