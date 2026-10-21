import type { CSSProperties } from 'react'
import { Award, Phone, Star, Truck } from 'lucide-react'
import { business } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { Container } from './ui'
import { buttonClass } from '../lib/styles'

// Ordem de entrada na sequência de carregamento (ver .reveal no index.css).
const step = (i: number) => ({ '--i': i }) as CSSProperties

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[radial-gradient(50%_60%_at_78%_40%,rgb(255_160_0/0.13),transparent_70%)] pt-10 pb-16 split:pt-16 split:pb-[88px]"
    >
      <Container className="grid items-center gap-9 split:grid-cols-[1.15fr_0.85fr] split:gap-14">
        <div className="fx-apart-left" data-scroll="hero">
          <a
            className="reveal inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.82rem] text-muted tabular-nums transition-colors duration-150 hover:border-accent xs:text-[0.9rem]"
            style={step(0)}
            href={business.google}
            target="_blank"
            rel="noopener"
          >
            <span className="hidden gap-0.5 text-accent xxs:inline-flex" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </span>
            {business.rating} em {business.reviews} avaliações no Google
          </a>

          <h1
            className="reveal mt-6 text-[clamp(2.4rem,5.4vw,3.9rem)] font-extrabold leading-[1.04] tracking-[-0.025em]"
            style={step(1)}
          >
            Sua chave resolvida onde você estiver.
          </h1>
          <p className="reveal mt-[22px] max-w-[560px] text-[1.15rem] text-muted" style={step(2)}>
            Chaves codificadas, abertura de cofre, troca de segredo, fechadura digital, cópia de chaves e afiação de
            alicate. Agende pelo WhatsApp e o chaveiro vai até você.
          </p>

          <div className="reveal mt-8 flex flex-wrap gap-3" style={step(3)}>
            <a className={buttonClass('primary', 'lg', 'w-full xs:w-auto')} href={waLink()} target="_blank" rel="noopener">
              <WhatsAppIcon size={22} /> Agendar no WhatsApp
            </a>
            <a className={buttonClass('ghost', 'lg', 'w-full xs:w-auto')} href={`tel:${business.phoneTel}`}>
              <Phone size={20} aria-hidden="true" /> {business.phoneDisplay}
            </a>
          </div>

          <ul className="reveal mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-muted" style={step(4)}>
            <li className="flex items-center gap-2">
              <Award size={16} className="text-accent" aria-hidden="true" /> {business.experience}
            </li>
            <li className="flex items-center gap-2">
              <Truck size={16} aria-hidden="true" /> Atendimento a domicílio em {business.serviceArea}
            </li>
          </ul>
        </div>

        <div className="fx-apart-right" data-scroll="hero">
          <figure className="reveal-right relative m-0 aspect-[4/3] overflow-hidden rounded-[20px] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.7)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.1)] after:content-[''] split:aspect-[4/5] split:rounded-3xl">
            <img
              className="settle block size-full object-cover object-[50%_55%] split:object-[50%_60%]"
              src="/media/instalacao-porta.jpg"
              alt="Tiago, do Chaveiro Oliveira, instalando uma fechadura em porta de madeira"
              width={900}
              height={1200}
              fetchPriority="high"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/75 to-transparent px-5 pt-12 pb-4 text-[0.85rem] text-white/85">
              Tiago em atendimento, instalando uma fechadura
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
