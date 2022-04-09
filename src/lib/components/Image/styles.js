export const imgWrapper = props => {
  return [
    {
      classes: 'w-full h-full mx-auto block',
      on: true,
    },
    { classes: '', styles: '', on: props.type == 'custom' },
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
