import { useEffect, useState } from 'react'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { cn } from '../lib/styles'

// Aparece só depois de rolar a abertura, para não cobrir o botão principal do WhatsApp no celular.
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <a
      className={cn(
        'fixed right-5 bottom-5 z-30 grid size-[60px] place-items-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgb(0_0_0/0.4)]',
        'transition-[opacity,transform] duration-[250ms] ease-quint motion-reduce:transition-none',
        visible ? 'opacity-100 hover:scale-[1.06]' : 'pointer-events-none translate-y-4 scale-90 opacity-0',
      )}
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Conversar no WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon size={30} />
    </a>
  )
}
