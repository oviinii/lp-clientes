import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Diga seu nome completo')
    .max(80, 'Nome muito longo'),
  contact: z
    .string()
    .min(8, 'Informe um WhatsApp ou e-mail válido')
    .max(120, 'Contato muito longo')
    .refine(
      (v) => /^[0-9+()\-\s]{8,}$/.test(v) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      'Use um telefone ou e-mail válido',
    ),
  reason: z.enum(
    ['obi', 'ogun', 'egungun', 'familia', 'festival', 'outro'],
    { message: 'Escolha um motivo' },
  ),
  message: z
    .string()
    .min(10, 'Conte um pouco mais — no mínimo 10 caracteres')
    .max(1000, 'Mensagem muito longa'),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const reasonLabel: Record<ContactFormValues['reason'], string> = {
  obi: 'Consulta com Obi',
  ogun: 'Culto de Ògún',
  egungun: 'Culto Egungun',
  familia: 'Culto familiar',
  festival: 'Festival de Esu',
  outro: 'Outro assunto',
}
