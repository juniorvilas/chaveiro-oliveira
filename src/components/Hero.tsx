import type { CSSProperties } from 'react'
import { Phone, Star, Truck } from 'lucide-react'
import { business } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

// Ordem de entrada na sequência de carregamento (ver .reveal no CSS).
const step = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__text" data-scroll="hero">
          <a className="badge reveal" style={step(0)} href={business.google} target="_blank" rel="noopener">
            <span className="badge__stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </span>
            {business.rating} em {business.reviews} avaliações no Google
          </a>

          <h1 className="reveal" style={step(1)}>Sua chave resolvida onde você estiver.</h1>
          <p className="hero__lead reveal" style={step(2)}>
            Chaves codificadas, abertura de cofre, troca de segredo, fechadura digital, cópia de chaves e afiação de
            alicate. Agende pelo WhatsApp e o chaveiro vai até você.
          </p>

          <div className="hero__cta reveal" style={step(3)}>
            <a className="btn btn--primary btn--lg" href={waLink()} target="_blank" rel="noopener">
              <WhatsAppIcon size={22} /> Agendar no WhatsApp
            </a>
            <a className="btn btn--ghost btn--lg" href={`tel:${business.phoneTel}`}>
              <Phone size={20} aria-hidden="true" /> {business.phoneDisplay}
            </a>
          </div>

          <p className="hero__place reveal" style={step(4)}>
            <Truck size={16} aria-hidden="true" /> Atendimento a domicílio em {business.serviceArea}
          </p>
        </div>

        <div className="hero__media" data-scroll="hero">
          <figure className="hero__photo">
            <img
              src="/media/instalacao-porta.jpg"
              alt="Tiago, do Chaveiro Oliveira, instalando uma fechadura em porta de madeira"
              width={900}
              height={1200}
              fetchPriority="high"
            />
            <figcaption>Tiago em atendimento, instalando uma fechadura</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
