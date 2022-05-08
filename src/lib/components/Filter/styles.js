export const filterTagsContainer = props => {
  return [
    {
      classes: 'w-full relative flex overflow-scroll p-2 no-scrollbar',
      styles: '',
      on: true, // default
    },
  ]
}

export const filterTag = props => {
  return [
    {
      classes: 'rounded-full px-6 py-3 md:px-12 md:py-5 bg-primary text-neutral-light inline-block m-[4px] md:m-3 transition duration-300 ease-out uppercase',
      styles: '',
      on: true, // default
    },
  ]
}

export const activeTag = props => {
  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
  ]
}

export const inactiveTag = props => {
  return [
    {
      classes: 'bg-opacity-[50%]',
      styles: '',
      on: true, // default
    },
  ]
}
