import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

export function WhatsAppFloat() {
  return (
    <a className="wa-float" href={waLink()} target="_blank" rel="noopener" aria-label="Conversar no WhatsApp">
      <WhatsAppIcon size={30} />
    </a>
  )
}
