import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Planeta Turismo — Lazer, Grupos e Corporativo | Sorocaba/SP",
  description:
    "Há +10 anos transformando viagens em experiências únicas. Pacotes, grupos exclusivos, viagens românticas, roteiros de fé e gestão completa de viagens corporativas, eventos e incentivos.",
  metadataBase: new URL("https://planeta.tur.br"),
  openGraph: {
    title: "Planeta Turismo — Viaje melhor, viaje Planeta",
    description: "Lazer, grupos, românticas, fé e corporativo com atendimento de excelência.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* WhatsApp flutuante */}
        <a
          href="https://wa.me/5515999999999?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Planeta%20Turismo."
          target="_blank"
          aria-label="Conversar no WhatsApp"
          className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl shadow-2xl transition hover:scale-110"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.7-1.3 1.3-1.9 1.4-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-4.9-4.3-5.1-4.5-.1-.2-1.2-1.7-1.2-3.2s.8-2.3 1-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.2.5.1.7-.1l.8-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4 0 .1 0 .4-.1.6Z"/></svg>
        </a>
      </body>
    </html>
  );
}
