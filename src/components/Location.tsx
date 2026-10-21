import { useEffect, useState } from 'react'
import { CalendarCheck, Clock, MessageCircle, Truck } from 'lucide-react'
import { business, schedule } from '../data/business'
import { storeStatus } from '../lib/hours'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { Container, Lead, Section, SectionTitle } from './ui'
import { buttonClass, cardClass, cn } from '../lib/styles'

const steps = [
  { icon: MessageCircle, title: 'Chame no WhatsApp', text: 'Conte o que precisa: chave, fechadura, porta, carro, cofre ou carimbo.' },
  { icon: CalendarCheck, title: 'Agende', text: 'Combinamos o dia, o horário e o endereço que for melhor para você.' },
  { icon: Truck, title: 'Vamos até você', text: 'O chaveiro vai ao local agendado e resolve na hora.' },
]

export function Location() {
  const [status, setStatus] = useState(storeStatus)

  useEffect(() => {
    const id = setInterval(() => setStatus(storeStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  // Lista de segunda a domingo.
  const ordered = [...schedule.slice(1), schedule[0]].map((s, i) => ({ ...s, index: (i + 1) % 7 }))

  return (
    <Section id="atendimento">
      <Container className="grid items-start gap-8 split:grid-cols-[1fr_1.2fr] split:gap-12">
        <div>
          <SectionTitle>A gente vai até você</SectionTitle>
          <Lead>O atendimento é feito pessoalmente, no endereço que você agendar, em {business.serviceArea}.</Lead>

          <ol className="my-8 grid gap-5">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="fx flex gap-4" data-scroll="enter" data-delay={i * 0.15}>
                <span
                  className="grid size-9 shrink-0 place-items-center rounded-full bg-accent/12 font-display font-extrabold text-accent"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="flex items-center gap-2 text-[1.1rem]">
                    <Icon size={18} className="text-accent" aria-hidden="true" /> {title}
                  </h3>
                  <p className="mt-1 text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            className={buttonClass('primary', 'lg')}
            href={waLink(`Olá! Gostaria de agendar um atendimento com o ${business.name}.`)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon size={22} /> Agendar pelo WhatsApp
          </a>
        </div>

        <div className={cn(cardClass, 'fx p-5')} data-scroll="enter" data-delay="0.1">
          <div className="flex flex-wrap items-center gap-2.5 font-semibold">
            <Clock size={20} className="text-accent" aria-hidden="true" />
            <span>Horário de atendimento</span>
            <span
              className={cn(
                'ml-auto rounded-full px-3 py-0.5 text-[0.8rem] font-semibold whitespace-nowrap',
                status.open ? 'bg-whatsapp/15 text-whatsapp' : 'bg-danger/15 text-danger',
              )}
            >
              {status.open ? 'Atendendo agora' : 'Fora do horário'}
            </span>
          </div>
          <table className="mt-3 w-full border-collapse">
            <tbody>
              {ordered.map(({ day, time, index }) => {
                const today = index === status.today
                const cell = cn('border-t border-line py-[7px]', today ? 'font-semibold text-fg' : 'font-normal text-muted')
                return (
                  <tr key={day}>
                    <th scope="row" className={cn(cell, 'text-left')}>{day}</th>
                    <td className={cn(cell, 'text-right tabular-nums')}>{time ? `${time[0]} – ${time[1]}` : 'Fechado'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <p className="mt-4 text-[0.9rem] text-muted">
            Fora do horário? Mande sua mensagem no WhatsApp que respondemos assim que possível.
          </p>
        </div>
      </Container>
    </Section>
  )
}
