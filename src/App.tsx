import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
import { Gallery } from './components/Gallery'
import { Reviews } from './components/Reviews'
import { Location } from './components/Location'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Statement } from './components/Statement'
import { useScrollEffects } from './lib/scrollFx'

export default function App() {
  useScrollEffects()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
        <Statement />
        <WhyUs />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
