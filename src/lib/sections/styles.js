export const preheaderStyles = props => {
  return [
    {
      classes: `py-1 text-${props.color}`,
      styles: '',
      on: true, // default
    },
  ]
}

export const titleStyles = props => {
  return [
    {
      classes: 'md:max-w-[70%] py-6',
      styles: '',
      on: true, // default
    },
  ]
}
