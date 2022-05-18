export const preheaderStyles = props => {
  return [
    {
      classes: `py-1`,
      styles: '',
      on: true, // default
    },
    {
      classes: `text-primary`,
      styles: '',
      on: props.color != 'neutral-light', 
    },
    {
      classes: `text-neutral-light`,
      styles: '',
      on: props.color == 'neutral-light', 
    },
    {
      classes: 'mx-auto text-center',
      styles: '',
      on: props.center,
    },
  ]
}

export const titleStyles = (props = {}) => {
  return [
    {
      classes: 'md:max-w-[50%] py-3',
      styles: '',
      on: true, // default
    },
    {
      classes: 'mx-auto text-center',
      styles: '',
      on: props.center,
    },
  ]
}

export const descriptionStyles = props => {
  return [
    {
      classes: 'max-w-[80%] md:max-w-[42ch] py-1',
      styles: '',
      on: true, // default
    },
    {
      classes: 'mx-auto text-center',
      styles: '',
      on: props.center,
    },
  ]
}
