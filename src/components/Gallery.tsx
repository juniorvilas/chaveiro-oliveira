import { useEffect, useRef, useState } from 'react'
import { BadgeCheck, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { gallery } from '../data/business'

// Só destaca "Trabalho real" quando há imagens ilustrativas misturadas na galeria.
const hasIllustrative = gallery.some((m) => m.credit)

export function Gallery() {
  const track = useRef<HTMLUListElement>(null)
  // current = slide alinhado à esquerda; atStart/atEnd = limites do scroll.
  const [pos, setPos] = useState({ current: 0, atStart: true, atEnd: false })
  const active = pos.atEnd ? gallery.length - 1 : pos.current

  const slideOffset = (el: HTMLElement, i: number) =>
    (el.children[i] as HTMLElement).offsetLeft - (el.children[0] as HTMLElement).offsetLeft

  // Acompanha a posição do scroll e pausa vídeos que saíram da tela.
  useEffect(() => {
    const el = track.current
    if (!el) return

    const update = () => {
      const x = el.scrollLeft
      let current = 0
      for (let i = 1; i < el.children.length; i++) {
        if (Math.abs(slideOffset(el, i) - x) < Math.abs(slideOffset(el, current) - x)) current = i
      }
      setPos({ current, atStart: x <= 1, atEnd: x + el.clientWidth >= el.scrollWidth - 1 })
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) entry.target.querySelector('video')?.pause()
        }
      },
      { root: el },
    )
    Array.from(el.children).forEach((s) => io.observe(s))

    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      io.disconnect()
    }
  }, [])

  const goTo = (index: number) => {
    const el = track.current
    if (!el) return
    const i = Math.max(0, Math.min(index, gallery.length - 1))
    el.scrollTo({ left: slideOffset(el, i), behavior: 'smooth' })
  }

  // Setas: vai para o slide anterior/seguinte em relação à posição atual do scroll.
  const step = (dir: -1 | 1) => {
    const el = track.current
    if (!el) return
    const x = el.scrollLeft
    const offsets = Array.from(el.children, (_, i) => slideOffset(el, i))
    const target =
      dir === 1 ? offsets.findIndex((o) => o > x + 1) : offsets.filter((o) => o < x - 1).length - 1
    if (target !== -1) goTo(target)
  }

  return (
    <section id="galeria" className="section section--alt">
      <div className="container">
        <div className="gallery__head">
          <div>
            <p className="eyebrow">Galeria</p>
            <h2>Nosso trabalho</h2>
          </div>
          <div className="gallery__arrows">
            <button className="icon-btn" onClick={() => step(-1)} disabled={pos.atStart} aria-label="Anterior">
              <ChevronLeft size={22} />
            </button>
            <button
              className="icon-btn"
              onClick={() => step(1)}
              disabled={pos.atEnd}
              aria-label="Próximo"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <ul ref={track} className="gallery" aria-label="Galeria de fotos">
          {gallery.map((m, i) => (
            <li key={m.src} className="slide" aria-label={`${i + 1} de ${gallery.length}: ${m.caption}`}>
              <div className="slide__media">
                {m.type === 'video' ? (
                  <video src={m.src} poster={m.poster} controls preload="none" playsInline aria-label={m.alt} />
                ) : (
                  <img src={m.src} alt={m.alt} loading="lazy" style={m.position ? { objectPosition: m.position } : undefined} />
                )}
                {m.type === 'video' && (
                  <span className="slide__tag"><Play size={12} fill="currentColor" aria-hidden="true" /> Vídeo</span>
                )}
                {hasIllustrative && !m.credit && (
                  <span className="slide__tag slide__tag--own"><BadgeCheck size={14} aria-hidden="true" /> Trabalho real</span>
                )}
              </div>
              <p className="slide__caption">{m.caption}</p>
            </li>
          ))}
        </ul>

        <div className="dots" role="group" aria-label="Escolher slide">
          {gallery.map((m, i) => (
            <button
              key={m.src}
              className={`dot ${i === active ? 'dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir para ${m.caption}`}
              aria-current={i === active}
            />
          ))}
        </div>

        {hasIllustrative && (
          <p className="gallery__note">
            Fotos sem o selo “Trabalho real” são ilustrativas. <a href="#creditos">Créditos</a>
          </p>
        )}
      </div>
    </section>
  )
}
