import { ExternalLink, Quote, Star } from 'lucide-react'
import { business, reviews } from '../data/business'

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

const Stars = ({ size = 16 }: { size?: number }) => (
  <span className="stars" aria-hidden="true">
    {Array.from({ length: 5 }, (_, i) => <Star key={i} size={size} fill="currentColor" />)}
  </span>
)

export function Reviews() {
  return (
    <section id="avaliacoes" className="section">
      <div className="container">
        <div className="reviews__head">
          <div>
            <h2 className="fx" data-scroll="enter">Quem contratou, recomenda</h2>
          </div>
          <a className="score" href={business.google} target="_blank" rel="noopener">
            <span className="score__num">{business.rating}</span>
            <span>
              <Stars size={18} />
              <span className="score__count">{business.reviews} avaliações no Google</span>
            </span>
          </a>
        </div>

        <ul className="reviews">
          {reviews.map((r, i) => (
            <li key={r.author} className="review fx" data-scroll="enter" data-delay={(i % 4) * 0.15}>
              <Quote size={28} className="review__quote" aria-hidden="true" />
              <Stars />
              <span className="sr-only">5 de 5 estrelas.</span>
              <blockquote>{r.text}</blockquote>
              <footer className="review__author">
                <span className="avatar" aria-hidden="true">{initials(r.author)}</span>
                <span>
                  <strong>{r.author}</strong>
                  <small>Avaliação no Google</small>
                </span>
              </footer>
            </li>
          ))}
        </ul>

        <a className="btn btn--ghost reviews__more" href={business.google} target="_blank" rel="noopener">
          Ver todas as avaliações no Google <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
