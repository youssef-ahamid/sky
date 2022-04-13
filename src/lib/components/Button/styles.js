export const button = props => {
  return [
    {
      classes: 'px-1.5 transition duration-300 ease-out hover:scale-105 active:scale-[95%] group',
      styles: '',
      on: true, // default
    },
    {
      classes: 'bg-primary hover:bg-neutral-light',
      styles: '',
      on: props.type == 'primary'
    },
    {
      classes: 'bg-neutral-light hover:bg-secondary',
      styles: '',
      on: props.type == 'secondary'
    },
  ]
}

export const buttonLabel = props => {
  return [
    {
      classes: 'uppercase font-semibold select-none leading-none transition duration-300 ease-out',
      styles: '',
      on: true, // default
    },
    {
      classes: 'text-neutral-light group-hover:text-primary',
      styles: '',
      on: props.type == 'primary'
    },
    {
      classes: 'text-secondary group-hover:text-neutral-light',
      styles: '',
      on: props.type == 'secondary'
    },
  ]
}

export const buttonIcon = props => {
  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary'
    },
  ]
}

