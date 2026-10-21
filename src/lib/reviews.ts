import { useEffect, useState } from 'react'

// Mesmo formato devolvido por api/reviews.ts.
export type Review = {
  author: string
  authorUrl?: string
  photo?: string
  rating: number
  text: string
  when?: string
}

export type ReviewsData = { rating?: number; total?: number; url?: string; reviews: Review[] }

export type ReviewsState = { status: 'loading' } | { status: 'error' } | { status: 'ok'; data: ReviewsData }

export function useGoogleReviews(): ReviewsState {
  const [state, setState] = useState<ReviewsState>({ status: 'loading' })

  useEffect(() => {
    const ctrl = new AbortController()
    fetch('/api/reviews', { signal: ctrl.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: ReviewsData) => setState({ status: 'ok', data }))
      .catch(() => {
        if (!ctrl.signal.aborted) setState({ status: 'error' })
      })
    return () => ctrl.abort()
  }, [])

  return state
}
