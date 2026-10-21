import { useRef, useState } from 'react'
import { business } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { Container, Section } from './ui'
import { buttonClass } from '../lib/styles'

// Faixa "Ficou trancado?": dentro dela o cursor vira uma chave (ver .key-cursor no index.css) e,
// ao encostar no cadeado, ele destranca. No celular, abre com um toque; no teclado, com Enter/Espaço.
export function LockBand() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number>(undefined)

  const unlock = () => {
    window.clearTimeout(closeTimer.current)
    setOpen(true)
  }

  return (
    <Section
      className="key-cursor overflow-hidden bg-[radial-gradient(40%_70%_at_75%_50%,rgb(255_140_0/0.14),transparent_70%)]"
      aria-labelledby="trancado-titulo"
      // Saiu da faixa: tranca de novo depois de um instante, para a brincadeira poder se repetir.
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') closeTimer.current = window.setTimeout(() => setOpen(false), 900)
      }}
    >
      <Container className="grid items-center gap-10 split:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2
            id="trancado-titulo"
            className="fx text-[clamp(1.8rem,4.5vw,2.6rem)] font-extrabold tracking-[-0.02em]"
            data-scroll="enter"
          >
            Ficou trancado do lado de fora?
          </h2>
          <p className="fx mt-3 max-w-[520px] text-muted" data-scroll="enter" data-delay="0.15">
            Porta, carro ou cofre: a gente abre sem estragar a fechadura.{' '}
            <span className="hidden [@media(hover:hover)]:inline">Passe a chave no cadeado ao lado.</span>
            <span className="[@media(hover:hover)]:hidden">Toque no cadeado.</span>
          </p>

          <p className="mt-6 min-h-[1.6em] font-semibold text-accent" aria-live="polite">
            {open ? 'Destrancado! A gente abre o seu também.' : ''}
          </p>

          <a
            className={buttonClass('primary', 'lg', 'mt-3')}
            href={waLink(`Olá! Preciso de uma abertura com o ${business.name}.`)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon size={22} /> Chamar para abertura
          </a>
        </div>

        <button
          type="button"
          className="lock mx-auto grid w-[min(56vw,240px)] cursor-[inherit] place-items-center"
          data-open={open}
          aria-pressed={open}
          aria-label={open ? 'Cadeado aberto. Trancar de novo' : 'Abrir o cadeado'}
          onPointerEnter={(e) => e.pointerType === 'mouse' && unlock()}
          onClick={() => (open ? setOpen(false) : unlock())}
        >
          <svg viewBox="0 0 200 240" className="w-full overflow-visible" aria-hidden="true">
            <defs>
              <linearGradient id="lock-body" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#ffc233" />
                <stop offset="1" stopColor="#f57c00" />
              </linearGradient>
              <linearGradient id="lock-metal" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#8a8a8a" />
                <stop offset=".45" stopColor="#f2f2f2" />
                <stop offset="1" stopColor="#9a9a9a" />
              </linearGradient>
              <radialGradient id="lock-glow">
                <stop offset="0" stopColor="#ffa000" stopOpacity=".55" />
                <stop offset="1" stopColor="#ffa000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle className="lock-glow" cx="100" cy="160" r="110" fill="url(#lock-glow)" />
            <path
              className="lock-shackle"
              d="M60 140 V72 a40 40 0 0 1 80 0 V140"
              fill="none"
              stroke="url(#lock-metal)"
              strokeWidth="22"
            />
            <g className="lock-body">
              <rect x="28" y="104" width="144" height="120" rx="26" fill="url(#lock-body)" />
              <rect x="28" y="104" width="144" height="120" rx="26" fill="none" stroke="#141414" strokeOpacity=".35" strokeWidth="3" />
              <path d="M44 120 h112" stroke="#ffffff" strokeOpacity=".45" strokeWidth="4" strokeLinecap="round" />
              <g className="lock-keyhole">
                <circle cx="100" cy="152" r="15" fill="#141414" />
                <path d="M92 158 h16 l5 34 h-26 z" fill="#141414" />
              </g>
            </g>
          </svg>
        </button>
      </Container>
    </Section>
  )
}
