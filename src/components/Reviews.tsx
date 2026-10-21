import { ExternalLink, Quote, Star } from 'lucide-react'
import { business } from '../data/business'
import { useGoogleReviews, type Review } from '../lib/reviews'

const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')

const Stars = ({ value = 5, size = 16 }: { value?: number; size?: number }) => (
  <span className="stars" aria-hidden="true">
    {Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={size} fill={i < Math.round(value) ? 'currentColor' : 'none'} />
    ))}
  </span>
)

function ReviewCard({ r }: { r: Review }) {
  return (
    <li className="review">
      <Quote size={28} className="review__quote" aria-hidden="true" />
      <Stars value={r.rating} />
      <span className="sr-only">{r.rating} de 5 estrelas.</span>
      <blockquote>{r.text}</blockquote>
      <footer className="review__author">
        {r.photo ? (
          <img className="avatar" src={r.photo} alt="" referrerPolicy="no-referrer" loading="lazy" />
        ) : (
          <span className="avatar" aria-hidden="true">{initials(r.author)}</span>
        )}
        <span>
          {r.authorUrl ? (
            <a href={r.authorUrl} target="_blank" rel="noopener"><strong>{r.author}</strong></a>
          ) : (
            <strong>{r.author}</strong>
          )}
          <small>Google{r.when ? ` · ${r.when}` : ''}</small>
        </span>
      </footer>
    </li>
  )
}

export function Reviews() {
  const state = useGoogleReviews()
  const data = state.status === 'ok' ? state.data : undefined
  const rating = data?.rating ? data.rating.toFixed(1).replace('.', ',') : business.rating
  const total = data?.total ?? business.reviews
  const url = data?.url ?? business.google

  return (
    <section id="avaliacoes" className="section">
      <div className="container">
        <div className="reviews__head">
          <div>
            <p className="eyebrow">Avaliações</p>
            <h2>Quem contratou, recomenda</h2>
          </div>
          <a className="score" href={url} target="_blank" rel="noopener">
            <span className="score__num">{rating}</span>
            <span>
              <Stars size={18} />
              <span className="score__count">{total} avaliações no Google</span>
            </span>
          </a>
        </div>

        {state.status === 'loading' && (
          <ul className="reviews" aria-busy="true" aria-label="Carregando avaliações">
            {Array.from({ length: 3 }, (_, i) => <li key={i} className="review review--skeleton" />)}
          </ul>
        )}

        {data && data.reviews.length > 0 && (
          <ul className="reviews">
            {data.reviews.map((r) => <ReviewCard key={r.author + r.text.slice(0, 20)} r={r} />)}
          </ul>
        )}

        <a className="btn btn--ghost reviews__more" href={url} target="_blank" rel="noopener">
          Ver todas as avaliações no Google <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
