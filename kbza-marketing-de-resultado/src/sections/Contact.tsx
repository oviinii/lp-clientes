import { zodResolver } from '@hookform/resolvers/zod'
import { MessageCircle, Send } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Reveal } from '../components/Reveal'
import {
  EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from '../data/content'

const schema = z.object({
  nome: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().optional(),
  mensagem: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const inputCls =
  'w-full rounded-xl border border-line bg-ink-3 px-4 py-3 font-sans text-sm text-bone placeholder:text-bone-dim/60 transition focus:border-leaf'

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  function onSubmit(data: FormData) {
    const text = [
      `Olá! Sou ${data.nome} (${data.email}${data.telefone ? ` · ${data.telefone}` : ''}).`,
      'Quero saber mais sobre captação de alunos para minha instituição.',
      data.mensagem ? `Sobre nós: ${data.mensagem}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener',
    )
  }

  return (
    <section id="contato" className="relative bg-ink-3 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-bold leading-tight tracking-tight text-bone sm:text-5xl">
            Vamos aumentar as matrículas da{' '}
            <span className="text-lime">sua instituição?</span>
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-line bg-ink-2 p-8">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-leaf">
                Contato
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-bone">
                Salas cheias começam com uma conversa.
              </h3>
              <ul className="mt-6 space-y-4 font-sans text-sm">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 text-bone-dim transition hover:text-bone"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf/15">
                      <MessageCircle size={17} className="text-leaf" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] opacity-70">
                        WhatsApp
                      </span>
                      <span className="font-semibold text-bone">{WHATSAPP_DISPLAY}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="text-bone-dim transition hover:text-bone">
                    <span className="block text-xs uppercase tracking-[0.2em] opacity-70">
                      E-mail
                    </span>
                    <span className="font-semibold text-bone">{EMAIL}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-bone-dim transition hover:text-bone"
                  >
                    <span className="block text-xs uppercase tracking-[0.2em] opacity-70">
                      Instagram
                    </span>
                    <span className="font-semibold text-bone">@kbzamkt</span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="rounded-2xl border border-line bg-ink-2 p-8"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="mb-1.5 block font-sans text-xs uppercase tracking-[0.18em] text-bone-dim">
                    Nome
                  </label>
                  <input id="nome" placeholder="Seu nome" className={inputCls} {...register('nome')} />
                  {errors.nome && <p className="mt-1 font-sans text-xs text-red-400">{errors.nome.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-sans text-xs uppercase tracking-[0.18em] text-bone-dim">
                    E-mail
                  </label>
                  <input id="email" placeholder="voce@instituicao.com" className={inputCls} {...register('email')} />
                  {errors.email && <p className="mt-1 font-sans text-xs text-red-400">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="telefone" className="mb-1.5 block font-sans text-xs uppercase tracking-[0.18em] text-bone-dim">
                    Telefone
                  </label>
                  <input id="telefone" placeholder="(00) 00000-0000" className={inputCls} {...register('telefone')} />
                </div>
                <div>
                  <label htmlFor="mensagem" className="mb-1.5 block font-sans text-xs uppercase tracking-[0.18em] text-bone-dim">
                    Mensagem
                  </label>
                  <textarea id="mensagem" rows={3} placeholder="Conte um pouco sobre a sua instituição" className={inputCls} {...register('mensagem')} />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-ink-3 transition hover:bg-lime"
              >
                <Send size={15} /> Enviar pelo WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-2 rounded-full bg-leaf py-3 pl-4 pr-5 font-sans text-sm font-semibold text-ink-3 shadow-glow transition hover:scale-105"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-3/10">
          <MessageCircle size={17} />
        </span>
        WhatsApp
      </a>
    </section>
  )
}
