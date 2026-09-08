import { useState } from 'react'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { contactSchema, type ContactFormValues } from '../lib/schema'

export function ContactCTA() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1200))
    // Em produção, aqui você envia para seu endpoint / WhatsApp / e-mail
    console.log('Enviado:', data)
    setStatus('success')
    setToast({ type: 'success', message: 'Mensagem enviada. Diego ou a equipe vão responder em breve.' })
    reset()
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contato" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="flex items-center gap-3 font-sans text-xs uppercase tracking-[0.4em] text-brass">
              <span className="slash" /> Fale comigo
            </p>
            <h2 className="max-w-xl font-display text-4xl leading-tight text-bone sm:text-5xl">
              Está pronto para o{' '}
              <span className="italic text-iron">próximo passo</span>?
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-bone-dim">
              Seja para uma consulta com Obi, orientação no culto de Ògún,
              questões sobre Egbe Orun ou Egungun, ou para saber do próximo
              Festival de Esu. Escreva direto — respondo sem enrolação.
            </p>

            <ul className="mt-10 space-y-4 font-sans text-sm text-bone-dim">
              {[
                'WhatsApp: (11) 9xxxx-xxxx — responde a equipe',
                'E-mail: ogunrogba@proton.me — direto no inbox do Diego',
                'Instagram: @di_guimaraesss — perfil verificado',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-moss" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={handleSubmit(onSubmit)}
            className="relative p-8 border border-line bg-ink-2"
          >
            <h3 className="font-display text-2xl text-bone">Enviar mensagem</h3>

            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block font-sans text-xs uppercase tracking-[0.2em] text-bone-dim mb-2">
                  Seu nome
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={`w-full rounded bg-ink border px-4 py-3 font-sans text-bone placeholder-bone-dim/50 transition ${
                    errors.name
                      ? 'border-iron focus:border-iron'
                      : 'border-line focus:border-brass'
                  }`}
                  placeholder="Diego Guimarães"
                />
                {errors.name && (
                  <p className="mt-1.5 font-sans text-xs text-iron">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact" className="block font-sans text-xs uppercase tracking-[0.2em] text-bone-dim mb-2">
                  WhatsApp ou e-mail
                </label>
                <input
                  id="contact"
                  type="text"
                  {...register('contact')}
                  className={`w-full rounded bg-ink border px-4 py-3 font-sans text-bone placeholder-bone-dim/50 transition ${
                    errors.contact
                      ? 'border-iron focus:border-iron'
                      : 'border-line focus:border-brass'
                  }`}
                  placeholder="(11) 99999-9999 ou nome@email.com"
                />
                {errors.contact && (
                  <p className="mt-1.5 font-sans text-xs text-iron">{errors.contact.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="reason" className="block font-sans text-xs uppercase tracking-[0.2em] text-bone-dim mb-2">
                  Assunto
                </label>
                <select
                  id="reason"
                  {...register('reason')}
                  className={`w-full rounded bg-ink border px-4 py-3 font-sans text-bone transition ${
                    errors.reason
                      ? 'border-iron focus:border-iron'
                      : 'border-line focus:border-brass'
                  }`}
                >
                  <option value="">Selecione</option>
                  {[
                    ['obi', 'Consulta com Obi'],
                    ['ogun', 'Culto de Ògún'],
                    ['egungun', 'Culto Egungun / Ancestrais'],
                    ['familia', 'Culto familiar'],
                    ['festival', 'Festival de Esu'],
                    ['outro', 'Outro assunto'],
                  ].map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.reason && (
                  <p className="mt-1.5 font-sans text-xs text-iron">{errors.reason.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-sans text-xs uppercase tracking-[0.2em] text-bone-dim mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className={`w-full rounded bg-ink border px-4 py-3 font-sans text-bone placeholder-bone-dim/50 transition resize-none ${
                    errors.message
                      ? 'border-iron focus:border-iron'
                      : 'border-line focus:border-brass'
                  }`}
                  placeholder="Conte brevemente o que você busca..."
                />
                {errors.message && (
                  <p className="mt-1.5 font-sans text-xs text-iron">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 bg-iron px-7 py-4 font-sans text-xs uppercase tracking-[0.28em] text-bone transition hover:bg-laterite disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-center font-sans text-[11px] text-bone-dim/70">
                Sem spam. Seus dados ficam só entre nós.
              </p>
            </div>
          </motion.form>
        </div>
      </div>

      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm rounded border p-4 backdrop-blur shadow-glow"
          style={{
            background: toast.type === 'success' ? 'rgba(94, 122, 74, 0.95)' : 'rgba(154, 58, 34, 0.95)',
            borderColor: toast.type === 'success' ? '#5e7a4a' : '#9a3a22',
          }}
        >
          <div className="flex items-start gap-3">
            {toast.type === 'success' ? (
              <CheckCircle size={20} className="mt-0.5 flex-shrink-0 text-bone" />
            ) : (
              <AlertCircle size={20} className="mt-0.5 flex-shrink-0 text-bone" />
            )}
            <p className="font-sans text-sm text-bone">{toast.message}</p>
          </div>
        </motion.div>
      )}
    </section>
  )
}