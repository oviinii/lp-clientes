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
    <div className="font-sans antialiased overflow-x-hidden selection:bg-brand-gold selection:text-white">
      <Header />
      <div id="inicio"><Hero /></div>
      <Pilares />
      <div id="depoimentos"><Depoimentos /></div>
      <div id="programacao"><Programacao /></div>
      <Mentora />
      <Egregora />
      <div id="palestrantes"><Palestrantes /></div>
      <Comparacao />
      <Frase />
      <div id="ingressos"><Oferta /></div>
      <Apoiadores />
      <div id="faq"><FAQ /></div>
      <Footer />
    </div>
  );
}

export default App;