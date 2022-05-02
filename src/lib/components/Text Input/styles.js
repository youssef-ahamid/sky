export const textInputWrapper = props => {
  return [
    {
      classes: 'group block w-full relative my-3',
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
      classes: 'block outline-none appearance-none py-8 px-10 transition placeholder:text-gray-300 caret-primary placeholder:font-light duration-300 ease-out ring-2 ring-primary rounded-[100px] bg-neutral-light bg-opacity-5 focus:bg-primary focus:bg-opacity-10 focus:text-primary text-neutral-dark w-full',
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
      classes: 'hidden',
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
      classes: 'hidden',
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

export const textInputCTA = props => {
  return [
    {
      classes: 'bg-primary absolute z-50 rounded-full top-1/2 -translate-y-1/2 right-0',
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

