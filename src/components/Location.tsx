import { useEffect, useState } from 'react'
import { CalendarCheck, Clock, MessageCircle, Truck } from 'lucide-react'
import { business, schedule } from '../data/business'
import { storeStatus } from '../lib/hours'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

const steps = [
  { icon: MessageCircle, title: 'Chame no WhatsApp', text: 'Conte o que precisa: tipo de chave, fechadura, cofre ou alicate.' },
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
    <section id="atendimento" className="section">
      <div className="container location">
        <div>
          <h2>A gente vai até você</h2>
          <p className="section__lead">
            Sem loja física: o atendimento é feito pessoalmente, no endereço que você agendar, em {business.serviceArea}.
          </p>

          <ol className="steps">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <span className="steps__num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3><Icon size={18} aria-hidden="true" /> {title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            className="btn btn--primary btn--lg"
            href={waLink(`Olá! Gostaria de agendar um atendimento com o ${business.name}.`)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon size={22} /> Agendar pelo WhatsApp
          </a>
        </div>

        <div className="hours">
          <div className="hours__head">
            <Clock size={20} aria-hidden="true" />
            <span>Horário de atendimento</span>
            <span className={`pill ${status.open ? 'pill--open' : 'pill--closed'}`}>
              {status.open ? 'Atendendo agora' : 'Fora do horário'}
            </span>
          </div>
          <table>
            <tbody>
              {ordered.map(({ day, time, index }) => (
                <tr key={day} className={index === status.today ? 'today' : undefined}>
                  <th scope="row">{day}</th>
                  <td>{time ? `${time[0]} – ${time[1]}` : 'Fechado'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="hours__note">
            Fora do horário? Mande sua mensagem no WhatsApp que respondemos assim que possível.
          </p>
        </div>
      </div>
    </section>
  )
}
