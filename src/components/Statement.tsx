import type { CSSProperties } from 'react'
import { Container } from './ui'

const text =
  'Você agenda pelo WhatsApp, o Tiago vai até você e resolve tudo no local, com o cuidado de quem tem nota 5,0 no Google.'

const words = text.split(' ')

// Frase que acende palavra por palavra conforme a rolagem (ver .statement no index.css).
export function Statement() {
  return (
    <section className="statement py-28" data-scroll="pin" aria-label="Como trabalhamos">
      <div className="statement-sticky">
        <Container>
          <p className="max-w-[1040px] font-display text-[clamp(1.9rem,5vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.025em]">
            {words.map((w, i) => (
              <span key={i} className="statement-word" style={{ '--w': i / words.length } as CSSProperties}>
                {w}{' '}
              </span>
            ))}
          </p>
        </Container>
      </div>
    </section>
  )
}
