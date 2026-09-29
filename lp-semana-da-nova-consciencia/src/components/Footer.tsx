import { Globe, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src="/logos/logo-horizontal-1.png" alt="Semana da Nova Consciência" className="h-12 w-auto object-contain mb-4" />
            <p className="text-gray-400 leading-relaxed">
              De 2 a 6 de dezembro de 2026. Mais de 25 Palestras, Entrevistas e Vivências para romper padrões antigos e manifestar uma nova realidade em 2027.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#programacao" className="text-gray-400 hover:text-brand-gold transition-colors">Programação</a></li>
              <li><a href="#palestrantes" className="text-gray-400 hover:text-brand-gold transition-colors">Palestrantes</a></li>
              <li><a href="#ingressos" className="text-gray-400 hover:text-brand-gold transition-colors">Ingressos</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-brand-gold transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Dúvidas? Entre em contato pelo e-mail ou redes sociais.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Semana da Nova Consciência. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Realização: Leandra Soares | Despertadores da Nova Era
          </p>
        </div>
      </div>
    </footer>
  );
}