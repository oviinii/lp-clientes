import { useLenis } from './lib/useLenis'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { InstaFloat } from './components/InstaFloat'
import { Hero } from './sections/Hero'
import { Collection } from './sections/Collection'
import { Why } from './sections/Why'
import { Looks } from './sections/Looks'
import { Praise } from './sections/Praise'
import { HowToBuy } from './sections/HowToBuy'
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
        <Collection />
        <Why />
        <Looks />
        <Praise />
        <HowToBuy />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <InstaFloat />
    </>
  )
}

export default App
