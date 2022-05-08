export const button = props => {
  return [
    {
      classes: 'relative my-1 flex items-center rounded-full p-1 transition duration-300 ease-out active:scale-[95%] group',
      styles: '',
      on: true, // default
    },
    {
      classes: 'bg-opacity-[15%] bg-neutral-light text-neutral-light hover:text-neutral-light',
      styles: '',
      on: props.type == 'primary' && props.shape != 'ghost'
    },
    {
      classes: 'bg-neutral-light hover:bg-secondary text-secondary hover:text-neutral-light',
      styles: '',
      on: props.type == 'secondary' && props.shape != 'ghost'
    },
    {
      classes: 'text-primary hover:text-neutral-light',
      styles: '',
      on: props.type == 'primary' && props.shape == 'ghost'
    },
    {
      classes: 'text-neutral-light',
      styles: '',
      on: props.type == 'secondary' && props.shape == 'ghost'
    },
  ]
}

export const buttonLabel = props => {
  return [
    {
      classes: 'text-current z-[5] whitespace-nowrap uppercase font-semibold select-none leading-none transition duration-300 ease-out pr-4 py-2',
      styles: '',
      on: true, // default
    },
    {
      classes: 'group-hover:shadow-xl group-hover:bg-primary rounded-full',
      styles: '',
      on: props.type == 'primary'
    },
    {
      classes: 'pl-4',
      styles: '',
      on: props.type != 'ghost'
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'secondary'
    },
    {
      classes: 'hidden',
      styles: '',
      on: !props.label || props.label.length == 0
    },
  ]
}

export const buttonIcon = props => {
  return [
    {
      classes: 'group-hover:translate-x-4 transition duration-500 ease-out text-current w-8 md:w-10 block m-1 md:m-2',
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

