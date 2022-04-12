export const imgWrapper = props => {
  return [
    {
      classes: 'w-full h-full mx-auto block',
      on: true,
    },
    { classes: 'max-h-[100px] md:max-h-[150px]', styles: '', on: props.size == 'sm' },
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
      classes: '',
      on: true,
    },
    { classes: '', styles: '', on: props.type == 'custom' },
  ]
}
