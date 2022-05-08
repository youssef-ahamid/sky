export const navLinkWrapper = props => {
  return [
    {
      classes: 'rounded-3xl group px-2 md:px-4 py-1 transition duration-300 ease-out hover:scale-105',
      styles: '',
      on: true, // default
    },
    {
      classes: 'hover:bg-primary hover:opacity-[75%] hover:text-neutral-light',
      styles: '',
      on: props.type == 'primary'
    },
    {
      classes: 'bg-primary text-neutral-light',
      styles: '',
      on: props.active
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'secondary'
    },
  ]
}

export const navSublinkList = props => {
  return [
    {
      classes: '',
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


export const navSublink = props => {
  return [
    {
      classes: '',
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

export const navSublinkActive = props => {
  return [
    {
      classes: '',
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

export const navSublinkInactive = props => {
  return [
    {
      classes: '',
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
