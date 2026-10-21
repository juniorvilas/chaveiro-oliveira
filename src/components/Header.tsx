import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { Logo } from './Logo'
import { Container } from './ui'
import { buttonClass, cn } from '../lib/styles'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#atendimento', label: 'Como funciona' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur-[10px]">
      <Container className="flex h-[68px] items-center justify-between">
        <a href="#inicio" aria-label={`${business.name} — início`}>
          <Logo className="logo-intro" />
        </a>

        {/* Abaixo de 901px vira um painel que abre pelo botão de menu */}
        <nav
          id="menu"
          aria-label="Principal"
          className={cn(
            open ? 'flex' : 'hidden',
            'absolute inset-x-0 top-[68px] flex-col items-stretch border-b border-line bg-bg px-4 pb-5 pt-2',
            'nav:static nav:flex nav:flex-row nav:items-center nav:gap-7 nav:border-0 nav:bg-transparent nav:p-0',
          )}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="whitespace-nowrap border-b border-line px-1 py-3.5 text-[1.05rem] font-medium text-muted transition-colors duration-200 hover:text-fg nav:border-0 nav:p-0 nav:text-[1rem]"
            >
              {l.label}
            </a>
          ))}
          <a className={buttonClass('primary', 'sm', 'mt-4 py-3.5 nav:mt-0 nav:py-2')} href={waLink()} target="_blank" rel="noopener">
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
        </nav>

        <button
          className="inline-flex cursor-pointer p-2 text-fg nav:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>
    </header>
  )
}
