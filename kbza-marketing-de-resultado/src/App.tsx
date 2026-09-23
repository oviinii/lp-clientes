import { useLenis } from './lib/useLenis'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Benefits } from './sections/Benefits'
import { Steps } from './sections/Steps'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
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
        <Benefits />
        <Steps />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
