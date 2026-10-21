import { Award, Star, ShieldCheck, Truck } from 'lucide-react'
import { business } from '../data/business'
import { Container, Section, SectionTitle } from './ui'

const items = [
  { icon: Award, title: business.experience, text: 'Duas décadas resolvendo problemas com chaves, fechaduras e cofres.' },
  { icon: Star, title: `Nota ${business.rating} no Google`, text: `Mais de ${business.reviews} clientes avaliaram nosso trabalho.` },
  { icon: ShieldCheck, title: 'Confiança', text: 'Pontualidade, serviço honesto, preço justo e cuidado com o que é seu.' },
  { icon: Truck, title: 'Vamos até você', text: `Atendimento no endereço que você agendar, em ${business.serviceArea}.` },
]

export function WhyUs() {
  return (
    <Section id="sobre" alt>
      <Container>
        <SectionTitle fx="fx-left">Quem atende, resolve</SectionTitle>
        <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-8">
          {items.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="fx-left flex gap-4" data-scroll="enter" data-delay={(i % 4) * 0.25}>
              <Icon size={24} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <h3 className="text-[1.1rem]">{title}</h3>
                <p className="mt-1.5 text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
