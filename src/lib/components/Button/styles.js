export const button = props => {
  return [
    {
      classes:
        'relative my-1 flex items-center justify-center rounded-full py-1 transition duration-300 ease-out hover:scale-[105%] active:scale-[95%] group',
      styles: '',
      on: true, // default
    },
    {
      classes: 'bg-primary text-neutral-light',
      styles: '',
      on:
        props.type == 'primary' &&
        props.shape != 'ghost' &&
        props.shape != 'icon',
    },
    {
      classes:
        'bg-neutral-light hover:bg-secondary text-secondary hover:text-neutral-light',
      styles: '',
      on:
        props.type == 'secondary' &&
        props.shape != 'ghost' &&
        props.shape != 'icon',
    },
    {
      classes:
        'text-current before:absolute before:w-full before:scale-x-0 hover:before:scale-x-100 before:h-px before:bg-current before:top-full before:origin-left before:transition before:duration-300 before:ease-out',
      styles: '',
      on: props.shape == 'ghost',
    },
    {
      classes: 'px-1',
      styles: '',
      on: props.shape != 'ghost',
    },
    {
      classes: 'rounded-full ring-1 ring-current',
      styles: '',
      on: props.shape == 'icon',
    },
    {
      classes:
        'bg-neutral-light text-primary hover:text-neutral-light hover:bg-primary',
      styles: '',
      on: props.shape == 'icon' && props.type == 'primary',
    },
  ]
}

export const buttonLabel = props => {
  return [
    {
      classes:
        'text-current z-[5] whitespace-nowrap uppercase font-semibold select-none leading-none transition duration-300 ease-out py-2',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary' && props.shape != 'ghost',
    },
    {
      classes: 'px-4',
      styles: '',
      on: props.shape != 'ghost',
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'secondary',
    },
    {
      classes: 'hidden',
      styles: '',
      on: !props.label || props.label.length == 0,
    },
  ]
}

export const buttonIcon = props => {
  return [
    {
      classes:
        'transition duration-500 ease-out text-current w-6 md:w-10 block',
      styles: '',
      on: true, // default
    },
    {
      classes: 'ml-1 md:ml-2',
      styles: '',
      on: props.shape != 'icon',
    },
    {
      classes: 'group-hover:translate-x-2 group-active:translate-x-0',
      styles: '',
      on: !props.reverse && props.icon != 'chevron_up',
    },
    {
      classes:
        'group-hover:-translate-x-2 group-active:translate-x-0',
      styles: '',
      on: props.reverse && props.icon != 'chevron_up',
    },
    {
      classes:
        'pb-1 px-0.5 group-hover:-translate-y-0.5 group-active:translate-y-0 group-active:scale-95',
      styles: '',
      on: props.icon == 'chevron_up',
    },
  ]
}
