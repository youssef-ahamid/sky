import { resolve } from '$lib/helpers'

export let section = options => {
  return [
    {
      classes: '',
    },
  ]
}

export let content = options => {
  return [
    {
      on: [options.noContain, false],
      classes: 'p-4 md:p-8 pt-10 md:pt-16 max-w-[80%] mx-auto',
    },
    {
      on: [options.noContain, true],
      classes: '',
    },
  ]
}

export let ctaContainer = options => {
  return [
    {
      classes: '',
    },
  ]
}

export const config = props => {
  return {
    section: resolve(section(props)),
    content: resolve(content(props)),
    ctaContainer: resolve(ctaContainer(props)),
  }
}
