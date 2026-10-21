import { useEffect } from 'react'

// Efeitos ligados à rolagem (estilo Apple): cada elemento com [data-scroll] recebe a variável CSS --p,
// de 0 a 1, conforme a posição dele na tela. O CSS transforma --p em movimento/opacidade, então rolar
// para cima desfaz o efeito. Sem JS ou com "reduzir movimento", --p fica no padrão 1 (tudo visível).
//
//   data-scroll="enter"  0 quando o topo entra pela base da tela → 1 quando chega a ~70% da altura
//   data-scroll="hero"   0 no topo da página → 1 quando a abertura saiu da tela
//   data-scroll="pin"    0 → 1 enquanto um bloco alto (com conteúdo sticky) atravessa a tela
//   data-delay="0.1"     atrasa o início (útil para cascata entre itens irmãos)

const clamp = (v: number) => Math.min(1, Math.max(0, v))

function progress(el: HTMLElement, vh: number) {
  const r = el.getBoundingClientRect()
  const delay = Number(el.dataset.delay ?? 0)

  switch (el.dataset.scroll) {
    case 'hero':
      return clamp(-r.top / r.height)
    case 'pin':
      return clamp(-r.top / (r.height - vh))
    default: {
      const p = (vh - r.top) / (vh * 0.3)
      return clamp(p - delay)
    }
  }
}

export function useScrollEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll]'))
    let frame = 0

    const update = () => {
      frame = 0
      const vh = window.innerHeight
      for (const el of els) el.style.setProperty('--p', progress(el, vh).toFixed(3))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    document.documentElement.classList.add('scroll-fx')
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      document.documentElement.classList.remove('scroll-fx')
    }
  }, [])
}
