import { Phone, Star, Truck } from 'lucide-react'
import { business } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <a className="badge" href={business.google} target="_blank" rel="noopener">
          <span className="badge__stars" aria-hidden="true">
            {Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}
          </span>
          {business.rating} · {business.reviews} avaliações no Google
        </a>

        <h1>
          Sua chave, <span className="accent">resolvida</span> onde você estiver.
        </h1>
        <p className="hero__lead">
          Chaves codificadas, abertura de cofre, troca de segredo, fechadura digital, cópia de chaves e afiação de alicate.
          Agende pelo WhatsApp e o chaveiro vai até você.
        </p>

        <div className="hero__cta">
          <a className="btn btn--primary btn--lg" href={waLink()} target="_blank" rel="noopener">
            <WhatsAppIcon size={22} /> Agendar no WhatsApp
          </a>
          <a className="btn btn--ghost btn--lg" href={`tel:${business.phoneTel}`}>
            <Phone size={20} aria-hidden="true" /> {business.phoneDisplay}
          </a>
        </div>

        <p className="hero__place">
          <Truck size={16} aria-hidden="true" /> Atendimento a domicílio · {business.serviceArea}
        </p>
      </div>
    </section>
  )
}
