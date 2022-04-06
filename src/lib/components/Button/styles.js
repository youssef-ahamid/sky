export const button = props => {
  return [
    {
      classes: 'px-1.5 transition duration-300 ease-out',
      styles: '',
      on: true, // default
    },
    {
      classes: 'bg-primary hover:bg-neutral-light hover:scale-105 active:scale-[95%]',
      styles: '',
      on: props.type == 'primary'
    },
    {
      classes: 'bg-neutral-light hover:bg-secondary hover:scale-105 active:scale-[95%]',
      styles: '',
      on: props.type == 'secondary'
    },
  ]
}

export const buttonLabel = props => {
  return [
    {
      classes: 'uppercase leading-none transition duration-300 ease-out',
      styles: '',
      on: true, // default
    },
    {
      classes: 'text-neutral-light hover:text-primary',
      styles: '',
      on: props.type == 'primary'
    },
    {
      classes: 'text-secondary hover:text-neutral-light',
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

