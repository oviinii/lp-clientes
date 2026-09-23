import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-honey">Sobre nós</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-cream md:text-5xl">
            Comida de verdade para quem está{' '}
            <span className="italic text-flame">na estrada</span>
          </h2>
          <p className="mt-5 font-sans leading-relaxed text-cream-dim">
            O Restaurante e Churrascaria da Nona é aquele típico restaurante
            de beira de estrada brasileiro: acolhedor, farto e com preço que
            cabe no bolso. Fica às margens da Dutra, no KM 71 em Aparecida —
            ponto de parada de viajantes, romeiros de Nossa Senhora Aparecida,
            famílias e excursões.
          </p>
          <p className="mt-4 font-sans leading-relaxed text-cream-dim">
            Self-service, por quilo, churrasco e o famoso café da madrugada
            para o amigo da estrada. Aqui ninguém passa fome nem pressa:
            banheiros limpos, atendimento amigável e mesa posta para grupos
            de qualquer tamanho.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid grid-cols-2 gap-3">
            {[
              ['Self-service', 'Buffet farto todos os dias'],
              ['Por quilo', 'Pague pelo que comer'],
              ['Churrasco', 'Carnes no ponto'],
              ['Madrugada', 'Café para o viajante'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-gradient-to-br from-ember-800 to-ember-900 px-5 py-8 text-center ring-1 ring-line"
              >
                <p className="font-display text-2xl text-honey">{title}</p>
                <p className="mt-2 font-sans text-sm text-cream-dim">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
