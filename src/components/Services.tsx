import { services } from '../data/business'
import { waLink } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'
import { Container, Lead, Section, SectionTitle } from './ui'
import { cardClass, cn } from '../lib/styles'

export function Services() {
  return (
    <Section id="servicos">
      <Container>
        <SectionTitle>O que fazemos</SectionTitle>
        <Lead>Trabalho feito com ferramenta certa e precisão — na hora, sempre que possível.</Lead>

        <ul className="mt-10 grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-4">
          {services.map(({ title, description, icon: Icon }, i) => (
            <li
              key={title}
              className={cn(cardClass, 'fx flex flex-col px-6 py-7 transition-shadow duration-200 hover:shadow-card-hover')}
              data-scroll="enter"
              data-delay={(i % 3) * 0.18}
            >
              <span className="grid size-[52px] place-items-center rounded-xl bg-accent/12 text-accent">
                <Icon size={26} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[1.25rem]">{title}</h3>
              <p className="mt-2 flex-1 text-muted">{description}</p>
              <a
                className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
                href={waLink(`Olá! Gostaria de um orçamento para: ${title}.`)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon size={18} /> Pedir orçamento no WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
