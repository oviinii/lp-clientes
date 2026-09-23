import { useCallback, useEffect, useState } from 'react'
import { useLenis } from './lib/useLenis'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsFloat } from './components/WhatsFloat'
import { Hero } from './sections/Hero'
import { Results } from './sections/Results'
import { Studio } from './sections/Studio'
import { Services } from './sections/Services'
import { Domicilio } from './sections/Domicilio'
import { Reviews } from './sections/Reviews'
import { Faq } from './sections/Faq'
import { FinalCTA } from './sections/FinalCTA'
import { Valores } from './pages/Valores'
import { Cursos } from './pages/Cursos'
import { Noticias } from './pages/Noticias'

export type Page = 'inicio' | 'valores' | 'cursos' | 'noticias'

function App() {
  useLenis()
  const [page, setPage] = useState<Page>('inicio')

  const navigate = useCallback((p: Page) => {
    setPage(p)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [page])

  return (
    <>
      <div className="grain" aria-hidden />
      <Navbar page={page} onNavigate={navigate} />
      <main id="main" className="min-h-screen pb-4">
        {page === 'inicio' && (
          <>
            <Hero />
            <Results />
            <Studio />
            <Services />
            <Domicilio />
            <Reviews />
            <Faq />
            <FinalCTA />
          </>
        )}
        {page === 'valores' && <Valores />}
        {page === 'cursos' && <Cursos />}
        {page === 'noticias' && <Noticias />}
      </main>
      <Footer onNavigate={navigate} />
      <WhatsFloat />
    </>
  )
}

export default App
