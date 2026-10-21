import { ArrowRight } from 'lucide-react'
import { services } from '../data/business'
import { waLink } from '../lib/whatsapp'

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="container">
        <p className="eyebrow">Serviços</p>
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
                Pedir orçamento <ArrowRight size={16} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
