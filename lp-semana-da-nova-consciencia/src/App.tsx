import { Header } from './components/Header';
import { SalesHero } from './components/SalesHero';
import { SalesVai } from './components/SalesVai';
import { Depoimentos } from './components/Depoimentos';
import { SalesMentora } from './components/SalesMentora';
import { SalesAgenda } from './components/SalesAgenda';
import { SalesOferta } from './components/SalesOferta';
import { SalesAdiar } from './components/SalesAdiar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden bg-brand-night font-sans antialiased">
      <Header />
      <main>
        {/* Ordem conforme a copy: dor -> entregáveis -> provas -> condução
            -> programação -> inscrição -> fechamento */}
        <SalesHero />
        <SalesVai />
        <Depoimentos />
        <SalesMentora />
        <SalesAgenda />
        <SalesOferta />
        <SalesAdiar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
