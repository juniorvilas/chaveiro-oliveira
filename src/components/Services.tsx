import { services } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <h2>O que fazemos</h2>
        <p className="section__lead">Trabalho feito com ferramenta certa e precisão — na hora, sempre que possível.</p>

        <ul className="services">
          {services.map(({ title, description, icon: Icon }) => (
            <li key={title} className="card">
              <span className="card__icon"><Icon size={26} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
              <a
                className="card__link"
                href={waLink(`Olá! Gostaria de um orçamento para: ${title}.`)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon size={18} /> Pedir orçamento no WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
