import { ExternalLink, Quote, Star } from 'lucide-react'
import { business, reviews } from '../data/business'
import { Container, Section, SectionTitle } from './ui'
import { buttonClass, cardClass, cn } from '../lib/styles'

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

const Stars = ({ size = 16 }: { size?: number }) => (
  <span className="inline-flex gap-0.5 text-accent" aria-hidden="true">
    {Array.from({ length: 5 }, (_, i) => <Star key={i} size={size} fill="currentColor" />)}
  </span>
)

export function Reviews() {
  return (
    <Section id="avaliacoes">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionTitle>Quem contratou, recomenda</SectionTitle>
          <a
            className="inline-flex items-center gap-3.5 rounded-card border border-line bg-surface px-[18px] py-3 transition-colors duration-200 hover:border-accent"
            href={business.google}
            target="_blank"
            rel="noopener"
          >
            <span className="font-display text-[2.4rem] leading-none font-extrabold">{business.rating}</span>
            <span>
              <Stars size={18} />
              <span className="mt-0.5 block text-[0.85rem] text-muted">{business.reviews} avaliações no Google</span>
            </span>
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
          {reviews.map((r, i) => (
            <li
              key={r.author}
              className={cn(cardClass, 'fx relative flex flex-col gap-3.5 px-6 py-[26px]')}
              data-scroll="enter"
              data-delay={(i % 4) * 0.15}
            >
              <Quote size={28} className="absolute top-5 right-5 text-accent/25" aria-hidden="true" />
              <Stars />
              <span className="sr-only">5 de 5 estrelas.</span>
              <blockquote className="flex-1">{r.text}</blockquote>
              <footer className="flex items-center gap-3 border-t border-line pt-3.5">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-[0.9rem] font-bold text-on-accent"
                  aria-hidden="true"
                >
                  {initials(r.author)}
                </span>
                <span>
                  <strong className="block font-semibold">{r.author}</strong>
                  <small className="text-[0.8rem] text-muted">Avaliação no Google</small>
                </span>
              </footer>
            </li>
          ))}
        </ul>

        <a className={buttonClass('ghost', 'md', 'mt-7')} href={business.google} target="_blank" rel="noopener">
          Ver todas as avaliações no Google <ExternalLink size={16} aria-hidden="true" />
        </a>
      </Container>
    </Section>
  )
}
