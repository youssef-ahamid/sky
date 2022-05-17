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
  ]
}

export const titleStyles = props => {
  return [
    {
      classes: 'md:max-w-[50%] py-3',
      styles: '',
      on: true, // default
    },
  ]
}

export const descriptionStyles = props => {
  return [
    {
      classes: 'md:max-w-[80%] py-1',
      styles: '',
      on: true, // default
    },
  ]
}
