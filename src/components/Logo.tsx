// Marca: chave atravessando o "O" de Oliveira, com uma folha de oliveira no olho da chave.
// No cabeçalho, o "O" se desenha e a chave desliza para dentro dele ao carregar (ver .header .logo__ring).
export function LogoMark({ height = 40 }: { height?: number }) {
  return (
    <svg height={height} viewBox="8 10 284 200" aria-hidden="true" className="logo__mark">
      <path
        className="logo__ring"
        d="M118 70A82 82 0 1 1 118 150"
        pathLength={1}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <g className="logo__key">
        <circle cx="52" cy="110" r="30" fill="none" stroke="var(--accent)" strokeWidth="18" />
        <path d="M40 120c0-14 9-23 23-23 0 13-9 23-23 23z" fill="var(--olive)" />
        <rect x="80" y="100" width="150" height="20" rx="4" fill="var(--accent)" />
        <rect x="192" y="112" width="14" height="28" rx="3" fill="var(--accent)" />
        <rect x="214" y="112" width="14" height="20" rx="3" fill="var(--accent)" />
      </g>
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`logo ${className}`}>
      <LogoMark />
      <span className="logo__word">
        <small>Chaveiro</small>
        <b>Oliveira</b>
      </span>
    </span>
  )
}
