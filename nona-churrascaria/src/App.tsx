import { useLenis } from './lib/useLenis'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { CallFloat } from './components/CallFloat'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Menu } from './sections/Menu'
import { Reasons } from './sections/Reasons'
import { Location } from './sections/Location'
import { Reviews } from './sections/Reviews'
import { Groups } from './sections/Groups'
import { Faq } from './sections/Faq'
import { FinalCTA } from './sections/FinalCTA'

function App() {
  useLenis()

  return (
    <>
      <div className="grain" aria-hidden />
      <Navbar />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Menu />
        <Reasons />
        <Location />
        <Reviews />
        <Groups />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <CallFloat />
    </>
  )
}

export default App
