export const imgWrapper = props => {
  return [
    {
      classes: 'w-full block',
      on: true,
    },
    { classes: 'p-3', styles: '', on: props.size == 'sm' },
  ]
}

export const imgOverlay = props => {
  return [
    {
      classes: '',
      on: true,
    },
    { classes: '', styles: '', on: props.type == 'custom' },
  ]
}

export const img = props => {
  return [
    {
      classes: 'w-full h-full block transition duration-300 ease-out',
      on: true,
    },
    { classes: '', styles: '', on: props.type == 'custom' },
    { classes: 'max-h-[70px] md:max-h-[110px] hover:scale-110', styles: '', on: props.size == 'sm' },
  ]
}
