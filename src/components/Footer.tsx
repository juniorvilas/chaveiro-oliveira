import { Mail, Phone, Star } from 'lucide-react'
import { business, gallery } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { InstagramIcon, WhatsAppIcon } from './BrandIcons'
import { Logo } from './Logo'
import { Container } from './ui'

// Só ícones: cada link tem aria-label (leitor de tela) e title (dica ao passar o mouse).
const iconClass =
  'grid size-11 place-items-center rounded-full border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent'

const contacts = [
  { label: 'WhatsApp', href: waLink(), icon: <WhatsAppIcon size={20} />, external: true },
  { label: `Ligar: ${business.phoneDisplay}`, href: `tel:${business.phoneTel}`, icon: <Phone size={20} aria-hidden="true" /> },
  { label: `E-mail: ${business.email}`, href: `mailto:${business.email}`, icon: <Mail size={20} aria-hidden="true" /> },
  { label: `Instagram ${business.instagramHandle}`, href: business.instagram, icon: <InstagramIcon size={20} />, external: true },
  { label: 'Avalie no Google', href: business.google, icon: <Star size={20} aria-hidden="true" />, external: true },
]

export function Footer() {
  return (
    <footer className="relative bg-[radial-gradient(50%_120%_at_50%_0%,rgb(255_140_0/0.07),transparent_70%)] pt-12 pb-24 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-linear-to-r before:from-transparent before:via-accent/35 before:to-transparent before:content-['']">
      <Container className="flex flex-wrap items-center justify-between gap-6">
        <Logo variant="emblem" />

        <ul className="flex flex-wrap gap-3">
          {contacts.map(({ label, href, icon, external }) => (
            <li key={label}>
              <a
                className={iconClass}
                href={href}
                aria-label={label}
                title={label}
                {...(external && { target: '_blank', rel: 'noopener' })}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex w-full flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line pt-6 text-[0.85rem] text-muted">
          <p>
            © {new Date().getFullYear()} {business.name}. Atendimento a domicílio em {business.serviceArea}.
          </p>
          <p>
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
        </div>

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
