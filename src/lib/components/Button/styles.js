export const button = props => {
  return [
    {
      classes: 'relative m-1 rounded-full p-1 transition duration-300 ease-out active:scale-[95%] group',
      styles: '',
      on: true, // default
    },
    {
      classes: 'bg-opacity-[15%] bg-neutral-light',
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
      classes: 'z-[5] whitespace-nowrap uppercase font-semibold select-none leading-none transition duration-300 ease-out  px-4 py-2',
      styles: '',
      on: true, // default
    },
    {
      classes: 'text-neutral-light group-hover:text-neutral-light group-hover:shadow-xl group-hover:bg-primary rounded-full',
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

