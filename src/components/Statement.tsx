import type { CSSProperties } from 'react'

const text =
  'Sem loja e sem fila. Você agenda pelo WhatsApp, o Tiago vai até você e resolve no local, com nota 5,0 de quem já contratou.'

const words = text.split(' ')

// Frase que acende palavra por palavra conforme a rolagem (ver .statement no CSS).
export function Statement() {
  return (
    <section className="statement" data-scroll="pin" aria-label="Como trabalhamos">
      <div className="statement__sticky">
        <p className="container statement__text">
          {words.map((w, i) => (
            <span key={i} style={{ '--w': i / words.length } as CSSProperties}>
              {w}{' '}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
