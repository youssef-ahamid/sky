export const imgWrapper = props => {
  return [
    {
      classes: 'relative group overflow-visible',
      on: true,
    },
    { classes: 'p-3', styles: '', on: props.size == 'sm' },
    {
      classes: 'inline-block',
      styles: '',
      on: props.type == 'square',
    },
    { classes: 'block', styles: '', on: props.type != 'square' },
  ]
}

export const imgOverlay = props => {
  return [
    {
      classes: 'transition duration-300 ease-out',
      on: true,
    },
    {
      classes:
        'absolute inset-0 -translate-y-6 group-hover:-translate-y-12 translate-x-6 group-hover:translate-x-12 bg-neutral-light hexagon z-[1]',
      styles: '',
      on: props.type == 'square',
    },
  ]
}

export const img = props => {
  return [
    {
      classes: 'w-full h-full block transition duration-300 ease-out',
      on: true,
    },
    {
      classes: 'max-w-[70px] md:max-w-[110px] hover:scale-110',
      styles: '',
      on: props.type == 'logo',
    },
    {
      classes:
        'w-12 md:w-16 h-12 md:h-16 rounded-full object-center object-cover hover:scale-110',
      styles: '',
      on: props.type == 'avatar',
    },
    {
      classes: 'object-top object-cover hover:scale-110',
      styles: '',
      on: props.type == 'bottom-cover',
    },
    {
      classes:
        'rounded-2xl my-6 md:my-auto md:rounded-[80px] object-cover object-center ring-1 ring-primary hover:ring-offset-4 hover:scale-105 min-h-[16rem] max-h-[22rem]',
      styles: '',
      on: props.type == 'custom',
    },
    {
      classes: 'max-h-[70px] md:max-h-[110px] hover:scale-110',
      styles: '',
      on: props.size == 'sm',
    },
    {
      classes: 'rounded-2xl md:rounded-[60px] group-hover:scale-110',
      styles: '',
      on: props.type == 'feature',
    },
    {
      classes:
        'relative z-[2] w-80 h-80 object-cover hexagon group-hover:scale-110',
      styles: '',
      on: props.type == 'square',
    },
    {
      classes:
        'w-32 h-44 rounded-2xl hover:scale-105 hover:ring-offset-4 ring-primary ring m-4 object-cover object-center',
      styles: '',
      on: props.type == 'award',
    },
  ]
}
