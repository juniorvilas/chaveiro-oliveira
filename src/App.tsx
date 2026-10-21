import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
import { Gallery } from './components/Gallery'
import { Location } from './components/Location'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <WhyUs />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
