export const navLinkWrapper = props => {
  return [
    {
      classes: 'uppercase underline decoration-2 hover:decoration-current underline-offset-2 transiton duration-300',
      styles: '',
      on: true, // default
    },
    {
      classes: 'text-primary',
      styles: '',
      on: props.type == 'primary'
    },

    {
      classes: 'text-neutral-light',
      styles: '',
      on: props.type == 'secondary'
    },
    {
      classes: 'decoration-current',
      styles: '',
      on: props.active
    },
    {
      classes: 'decoration-transparent',
      styles: '',
      on: !props.active
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
