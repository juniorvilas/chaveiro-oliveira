import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { Logo } from './Logo'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#atendimento', label: 'Como funciona' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" aria-label={`${business.name} — início`}>
          <Logo />
        </a>

        <nav id="menu" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn--primary btn--sm" href={waLink()} target="_blank" rel="noopener">
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
