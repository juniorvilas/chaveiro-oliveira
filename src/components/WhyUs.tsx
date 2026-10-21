import { Zap, Star, ShieldCheck, Truck } from 'lucide-react'
import { business } from '../data/business'

const items = [
  { icon: Zap, title: 'Atendimento ágil', text: 'Você chega e sai com o problema resolvido, sem enrolação.' },
  { icon: Star, title: `Nota ${business.rating} no Google`, text: `Mais de ${business.reviews} clientes avaliaram nosso trabalho.` },
  { icon: ShieldCheck, title: 'Confiança', text: 'Serviço honesto, preço justo e cuidado com o que é seu.' },
  { icon: Truck, title: 'Vamos até você', text: `Atendimento no endereço que você agendar, em ${business.serviceArea}.` },
]

export function WhyUs() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <p className="eyebrow">Por que nós</p>
        <h2>Quem atende, resolve</h2>
        <ul className="why">
          {items.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <Icon size={24} className="why__icon" aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
