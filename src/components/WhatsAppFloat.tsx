import { useEffect, useState } from 'react'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

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
      className={`wa-float ${visible ? 'wa-float--visible' : ''}`}
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
