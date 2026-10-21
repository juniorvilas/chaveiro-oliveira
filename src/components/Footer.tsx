import { Phone, Star } from 'lucide-react'
import { business, gallery } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo />

        <ul className="footer__links">
          <li><a href={waLink()} target="_blank" rel="noopener"><WhatsAppIcon size={18} /> WhatsApp</a></li>
          <li><a href={`tel:${business.phoneTel}`}><Phone size={18} aria-hidden="true" /> {business.phoneDisplay}</a></li>
          <li><a href={business.instagram} target="_blank" rel="noopener"><InstagramIcon size={18} /> {business.instagramHandle}</a></li>
          <li><a href={business.google} target="_blank" rel="noopener"><Star size={18} aria-hidden="true" /> Avalie no Google</a></li>
        </ul>

        <p className="footer__copy">
          © {new Date().getFullYear()} {business.name}. Atendimento a domicílio em {business.serviceArea}.
        </p>

        <p className="footer__dev">
          Desenvolvido por{' '}
          <a href="https://www.carlindojunior.xyz/" target="_blank" rel="noopener">Junior</a>
        </p>

        {gallery.some((m) => m.credit) && (
          <details id="creditos" className="credits">
            <summary>Créditos das imagens</summary>
            <ul>
              {gallery.map(({ src, caption, credit }) =>
                credit ? (
                  <li key={src}>
                    {caption}: {credit.author}, {credit.license},{' '}
                    <a href={credit.source} target="_blank" rel="noopener">Wikimedia Commons</a>
                  </li>
                ) : null,
              )}
            </ul>
          </details>
        )}
      </div>
    </footer>
  )
}
