// Classes do Tailwind reaproveitadas em vários componentes.

export const cn = (...classes: (string | false | null | undefined)[]) => classes.filter(Boolean).join(' ')

const buttonBase =
  'inline-flex items-center justify-center gap-2.5 rounded-full border-2 font-semibold ' +
  'transition-[background-color,color,border-color,transform] duration-150 active:scale-[0.97] ' +
  'motion-reduce:transition-none motion-reduce:active:scale-100'

const buttonVariants = {
  primary:
    'border-transparent bg-linear-to-b from-[#ffb733] to-[#ff8f00] text-on-accent shadow-[inset_0_1px_0_rgb(255_255_255/0.35),0_8px_24px_-10px_rgb(255_140_0/0.7)] hover:from-[#ffc24d] hover:to-[#ffa000]',
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
