import { business } from '../data/business'

export function waLink(message = `Olá! Vim pelo site do ${business.name} e gostaria de agendar um atendimento.`) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}
