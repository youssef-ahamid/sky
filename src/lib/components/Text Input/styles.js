export const textInputWrapper = props => {
  return [
    {
      classes: 'group block my-3 md:my-6 w-full',
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

export const textInput = props => {
  return [
    {
      classes: 'block outline-none appearance-none p-4 pb-1 transition duration-300 ease-out border-b-4 bg-secondary bg-opacity-5 focus:bg-opacity-15 focus:text-primary text-neutral-dark rounded w-full',
      styles: '',
      on: true, // default
    },
    {
      on: props.clean == false,
      classes: 'border-red-300 bg-opacity-[15%]',
    },
    {
      on: props.clean == true,
      classes: 'border-primary',
    },
    {
      on: props.type == 'text area',
      classes: 'resize-none h-28 md:h-40 w-full min-w-[100%] block',
    },
    { 
      classes: '', 
      styles: '', 
      on: props.type == 'primary' 
    },
  ]
}


export const textInputName = props => {
  return [
    {
      classes: 'text-primary font-medium text-primary capitalize py-0.5 transition duration-300 ease-out',
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

export const textInputError = props => {
  return [
    {
      classes: 'text-red-300 font-extralight text-base md:text-lg',
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

