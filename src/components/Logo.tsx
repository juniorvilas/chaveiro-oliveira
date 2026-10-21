import { cn } from '../lib/styles'

// Logo original do Chaveiro Oliveira (public/logo.png, recortado em círculo).
// - compact (cabeçalho): logo pequeno + nome ao lado;
//   com a classe logo-intro, o logo entra girando ao carregar a página.
// - emblem (rodapé): só o logo, maior.
export function Logo({ className, variant = 'compact' }: { className?: string; variant?: 'compact' | 'emblem' }) {
  if (variant === 'emblem') {
    return <img className={cn('size-24', className)} src="/logo.png" width={96} height={96} alt="Chaveiro Oliveira" />
  }

  return (
    <span className={cn('inline-flex items-center gap-3 font-logo', className)}>
      <img className="logo-emblem size-12 shrink-0" src="/logo.png" width={48} height={48} alt="" />
      <span className="flex flex-col uppercase leading-none">
        <small className="text-[0.78rem] font-medium tracking-[0.28em] text-fg">Chaveiro</small>
        <b className="text-[1.6rem] font-bold tracking-[0.02em] text-accent">Oliveira</b>
      </span>
    </span>
  )
}
