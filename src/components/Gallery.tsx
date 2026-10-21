import { useEffect, useRef, useState } from 'react'
import { BadgeCheck, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { gallery } from '../data/business'
import { Container, Section, SectionTitle } from './ui'
import { cn } from '../lib/styles'

// Só destaca "Trabalho real" quando há imagens ilustrativas misturadas na galeria.
const hasIllustrative = gallery.some((m) => m.credit)

const arrowClass =
  'grid size-[46px] cursor-pointer place-items-center rounded-full border border-line bg-bg text-fg ' +
  'transition-[border-color,color,opacity,transform] duration-150 enabled:hover:border-accent enabled:hover:text-accent ' +
  'enabled:active:scale-[0.94] disabled:cursor-default disabled:opacity-35 motion-reduce:transition-none'

const tagClass =
  'pointer-events-none absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.75rem] font-semibold'

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
    <Section id="galeria" alt>
      <Container>
        <div className="flex items-end justify-between gap-4">
          <SectionTitle>Nosso trabalho</SectionTitle>
          <div className="flex gap-2">
            <button className={arrowClass} onClick={() => step(-1)} disabled={pos.atStart} aria-label="Anterior">
              <ChevronLeft size={22} />
            </button>
            <button className={arrowClass} onClick={() => step(1)} disabled={pos.atEnd} aria-label="Próximo">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          className="fx-slide mt-8 grid auto-cols-[min(78%,320px)] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          data-scroll="enter"
          aria-label="Galeria de fotos"
        >
          {gallery.map((m, i) => (
            <li key={m.src} className="group snap-start" aria-label={`${i + 1} de ${gallery.length}: ${m.caption}`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-black after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.08)] after:content-['']">
                {m.type === 'video' ? (
                  <video
                    className="block size-full object-contain"
                    src={m.src}
                    poster={m.poster}
                    controls
                    preload="none"
                    playsInline
                    aria-label={m.alt}
                  />
                ) : (
                  <img
                    className="block size-full object-cover transition-transform duration-500 ease-quint group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    src={m.src}
                    alt={m.alt}
                    loading="lazy"
                    style={m.position ? { objectPosition: m.position } : undefined}
                  />
                )}
                {m.type === 'video' && (
                  <span className={cn(tagClass, 'bg-black/70 text-accent')}>
                    <Play size={12} fill="currentColor" aria-hidden="true" /> Vídeo
                  </span>
                )}
                {hasIllustrative && !m.credit && (
                  <span className={cn(tagClass, 'bg-accent text-on-accent')}>
                    <BadgeCheck size={14} aria-hidden="true" /> Trabalho real
                  </span>
                )}
              </div>
              <p className="mt-3 font-semibold">{m.caption}</p>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap justify-center gap-1" role="group" aria-label="Escolher slide">
          {gallery.map((m, i) => (
            <button
              key={m.src}
              className={cn(
                'relative size-6 cursor-pointer after:absolute after:rounded-full after:transition-[background-color,inset] after:duration-200 after:ease-quint after:content-[""]',
                i === active ? 'after:inset-x-1 after:inset-y-2 after:bg-accent' : 'after:inset-2 after:bg-line',
              )}
              onClick={() => goTo(i)}
              aria-label={`Ir para ${m.caption}`}
              aria-current={i === active}
            />
          ))}
        </div>

        {hasIllustrative && (
          <p className="mt-2 text-center text-[0.8rem] text-muted">
            Fotos sem o selo “Trabalho real” são ilustrativas.{' '}
            <a className="underline" href="#creditos">Créditos</a>
          </p>
        )}
      </Container>
    </Section>
  )
}
