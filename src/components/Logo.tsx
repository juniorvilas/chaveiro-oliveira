import { cn } from '../lib/styles'

// Marca: chave atravessando o "O" de Oliveira, com uma folha de oliveira no olho da chave.
// Com a classe logo-intro (no cabeçalho), o "O" se desenha e a chave desliza para dentro dele.
export function LogoMark({ height = 40 }: { height?: number }) {
  return (
    <svg height={height} viewBox="8 10 284 200" aria-hidden="true" className="shrink-0">
      <path
        className="logo-ring"
        d="M118 70A82 82 0 1 1 118 150"
        pathLength={1}
        fill="none"
        stroke="var(--color-accent)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <g className="logo-key">
        <circle cx="52" cy="110" r="30" fill="none" stroke="var(--color-accent)" strokeWidth="18" />
        <path d="M40 120c0-14 9-23 23-23 0 13-9 23-23 23z" fill="var(--color-olive)" />
        <rect x="80" y="100" width="150" height="20" rx="4" fill="var(--color-accent)" />
        <rect x="192" y="112" width="14" height="28" rx="3" fill="var(--color-accent)" />
        <rect x="214" y="112" width="14" height="20" rx="3" fill="var(--color-accent)" />
      </g>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-3 font-logo', className)}>
      <LogoMark />
      <span className="flex flex-col uppercase leading-[0.95]">
        <small className="text-[0.6rem] font-bold tracking-[0.34em] text-fg">Chaveiro</small>
        <b className="text-[1.35rem] font-black tracking-[0.01em] text-accent">Oliveira</b>
      </span>
    </span>
  )
}
