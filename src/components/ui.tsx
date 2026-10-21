import type { ComponentProps, ReactNode } from 'react'
import { cn } from '../lib/styles'

// Peças de layout repetidas pelo site, para as classes do Tailwind não se espalharem copiadas.

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1120px] px-4', className)} {...props} />
}

export function Section({ alt, className, ...props }: ComponentProps<'section'> & { alt?: boolean }) {
  return (
    <section
      className={cn('py-16 xs:py-[88px]', alt && 'section-alt', className)}
      {...props}
    />
  )
}

// Título de seção; `fx` escolhe o efeito de rolagem (ver index.css).
export function SectionTitle({ children, fx = 'fx' }: { children: ReactNode; fx?: 'fx' | 'fx-left' }) {
  return (
    <h2 className={cn(fx, 'text-[clamp(1.8rem,4.5vw,2.6rem)] font-extrabold tracking-[-0.02em]')} data-scroll="enter">
      {children}
    </h2>
  )
}

export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="fx mt-3 max-w-[560px] text-muted" data-scroll="enter" data-delay="0.15">
      {children}
    </p>
  )
}
