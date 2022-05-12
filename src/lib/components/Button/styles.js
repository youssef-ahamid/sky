export const button = props => {
  return [
    {
      classes: 'relative my-1 flex items-center justify-center rounded-full p-1 transition duration-300 ease-out hover:scale-[105%] active:scale-[95%] group',
      styles: '',
      on: true, // default
    },
    {
      classes: 'bg-primary text-neutral-light',
      styles: '',
      on: props.type == 'primary' && props.shape != 'ghost' && props.shape != 'icon'
    },
    {
      classes: 'bg-neutral-light hover:bg-secondary text-secondary hover:text-neutral-light',
      styles: '',
      on: props.type == 'secondary' && props.shape != 'ghost' && props.shape != 'icon'
    },
    {
      classes: 'text-current -ml-5',
      styles: '',
      on:  props.shape == 'ghost'
    },
    {
      classes: 'rounded-full ring-1 ring-current',
      styles: '',
      on:  props.shape == 'icon'
    },
    {
      classes: 'bg-neutral-light text-primary hover:text-neutral-light hover:bg-primary',
      styles: '',
      on:  props.shape == 'icon' && props.type == 'primary'
    },
  ]
}

export const buttonLabel = props => {
  return [
    {
      classes: 'text-current z-[5] whitespace-nowrap uppercase font-semibold select-none leading-none transition duration-300 ease-out pr-4 py-2 group-hover:rotate-[-7deg] ',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary' && props.shape != 'ghost'
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
      classes: 'transition duration-500 ease-out text-current w-6 md:w-10 block m-1 md:m-2',
      styles: '',
      on: true, // default
    },
    {
      classes: 'group-hover:translate-x-2 group-active:translate-x-0',
      styles: '',
      on: !props.reverse
    },
    {
      classes: 'group-hover:-translate-x-2 group-active:translate-x-0',
      styles: '',
      on: props.reverse
    },
  ]
}

