import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pilares } from './components/Pilares';
import { Depoimentos } from './components/Depoimentos';
import { Programacao } from './components/Programacao';
import { Mentora } from './components/Mentora';
import { Egregora } from './components/Egregora';
import { Palestrantes } from './components/Palestrantes';
import { Comparacao } from './components/Comparacao';
import { Frase } from './components/Frase';
import { Oferta } from './components/Oferta';
import { Apoiadores } from './components/Apoiadores';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden bg-brand-night font-sans antialiased">
      <Header />
      <main>
        {/* Ordem das seções conforme o briefing (Sessões 01 a 12) */}
        <Hero />
        <Pilares />
        <Depoimentos />
        <Programacao />
        <Mentora />
        <Egregora />
        <Palestrantes />
        <Comparacao />
        <Frase />
        <Oferta />
        <Apoiadores />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
