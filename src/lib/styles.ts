// Classes do Tailwind reaproveitadas em vários componentes.

export const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ')

const buttonBase =
  'inline-flex items-center justify-center gap-2.5 rounded-full border-2 font-semibold ' +
  'transition-[background-color,color,border-color,transform] duration-150 active:scale-[0.97] ' +
  'motion-reduce:transition-none motion-reduce:active:scale-100'

const buttonVariants = {
  primary: 'border-transparent bg-accent text-on-accent hover:bg-accent-hover',
  ghost: 'border-line text-fg hover:border-accent hover:text-accent',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-[0.95rem]',
  md: 'px-5 py-3',
  lg: 'px-[26px] py-4 text-[1.05rem]',
}

export function buttonClass(
  variant: keyof typeof buttonVariants = 'primary',
  size: keyof typeof buttonSizes = 'md',
  extra?: string,
) {
  return cn(buttonBase, buttonVariants[variant], buttonSizes[size], extra)
}

export const cardClass = 'rounded-card bg-surface shadow-card'
