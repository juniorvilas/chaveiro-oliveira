// Função serverless da Vercel: busca nota, total e avaliações do perfil no Google (Places API New).
// A chave fica só aqui no servidor, em variáveis de ambiente da Vercel:
//   GOOGLE_PLACES_API_KEY  (obrigatória)
//   GOOGLE_PLACE_ID        (opcional; sem ela, o lugar é encontrado pela busca abaixo)
// A resposta fica em cache na CDN da Vercel por 24h, então o Google é consultado ~1 vez por dia.

const SEARCH_QUERY = 'CHAVEIRO OLIVEIRA Lauro de Freitas BA'
// Avaliações que não devem aparecer no site (ex.: de quem desenvolveu o site).
const EXCLUDED_AUTHORS = ['carlindo junior']

type GoogleReview = {
  rating?: number
  relativePublishTimeDescription?: string
  text?: { text?: string }
  originalText?: { text?: string }
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
}

type GooglePlace = {
  id?: string
  rating?: number
  userRatingCount?: number
  googleMapsUri?: string
  reviews?: GoogleReview[]
}

const FIELDS = ['id', 'rating', 'userRatingCount', 'googleMapsUri', 'reviews']

async function fetchPlace(key: string): Promise<GooglePlace | undefined> {
  const headers = { 'X-Goog-Api-Key': key, 'Content-Type': 'application/json' }
  const placeId = process.env.GOOGLE_PLACE_ID

  if (placeId) {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`, {
      headers: { ...headers, 'X-Goog-FieldMask': FIELDS.join(',') },
    })
    if (!res.ok) throw new Error(`Place Details ${res.status}: ${await res.text()}`)
    return (await res.json()) as GooglePlace
  }

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { ...headers, 'X-Goog-FieldMask': FIELDS.map((f) => `places.${f}`).join(',') },
    body: JSON.stringify({ textQuery: SEARCH_QUERY, languageCode: 'pt-BR', maxResultCount: 1 }),
  })
  if (!res.ok) throw new Error(`Text Search ${res.status}: ${await res.text()}`)
  const data = (await res.json()) as { places?: GooglePlace[] }
  return data.places?.[0]
}

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) return Response.json({ error: 'GOOGLE_PLACES_API_KEY não configurada' }, { status: 503 })

  try {
    const place = await fetchPlace(key)
    if (!place) return Response.json({ error: 'Lugar não encontrado no Google' }, { status: 404 })

    const reviews = (place.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Cliente Google',
        authorUrl: r.authorAttribution?.uri,
        photo: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: (r.originalText?.text ?? r.text?.text ?? '').trim(),
        when: r.relativePublishTimeDescription,
      }))
      .filter((r) => r.text && r.rating >= 4 && !EXCLUDED_AUTHORS.includes(r.author.toLowerCase()))

    return Response.json(
      { rating: place.rating, total: place.userRatingCount, url: place.googleMapsUri, placeId: place.id, reviews },
      { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800' } },
    )
  } catch (err) {
    console.error(err)
    return Response.json({ error: 'Falha ao consultar o Google' }, { status: 502 })
  }
}
