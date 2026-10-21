import { Mail, Phone, Star } from 'lucide-react'
import { business, gallery } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'
import { Logo } from './Logo'
import { Container } from './ui'

const linkClass = 'inline-flex items-center gap-2 text-muted transition-colors duration-200 hover:text-accent'

export function Footer() {
  return (
    <footer className="relative bg-[radial-gradient(50%_120%_at_50%_0%,rgb(255_140_0/0.07),transparent_70%)] pt-12 pb-24 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-accent/35 before:to-transparent before:content-['']">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <Logo variant="emblem" />

        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li><a className={linkClass} href={waLink()} target="_blank" rel="noopener"><WhatsAppIcon size={18} /> WhatsApp</a></li>
          <li><a className={linkClass} href={`tel:${business.phoneTel}`}><Phone size={18} aria-hidden="true" /> {business.phoneDisplay}</a></li>
          <li><a className={linkClass} href={`mailto:${business.email}`}><Mail size={18} aria-hidden="true" /> {business.email}</a></li>
          <li><a className={linkClass} href={business.instagram} target="_blank" rel="noopener"><InstagramIcon size={18} /> {business.instagramHandle}</a></li>
          <li><a className={linkClass} href={business.google} target="_blank" rel="noopener"><Star size={18} aria-hidden="true" /> Avalie no Google</a></li>
        </ul>

        <p className="flex-auto text-[0.85rem] text-muted">
          © {new Date().getFullYear()} {business.name}. Atendimento a domicílio em {business.serviceArea}.
        </p>

        <p className="text-[0.85rem] text-muted">
          Desenvolvido por{' '}
          <a
            className="-mx-1 -my-2.5 inline-block px-1 py-2.5 font-semibold text-accent hover:underline"
            href="https://www.carlindojunior.xyz/"
            target="_blank"
            rel="noopener"
          >
            Junior
          </a>
        </p>

        {gallery.some((m) => m.credit) && (
          <details id="creditos" className="w-full text-[0.8rem] text-muted">
            <summary className="w-fit cursor-pointer">Créditos das imagens</summary>
            <ul className="mt-2 grid gap-1">
              {gallery.map(({ src, caption, credit }) =>
                credit ? (
                  <li key={src}>
                    {caption}: {credit.author}, {credit.license},{' '}
                    <a className="underline" href={credit.source} target="_blank" rel="noopener">Wikimedia Commons</a>
                  </li>
                ) : null,
              )}
            </ul>
          </details>
        )}
      </Container>
    </footer>
  )
}
