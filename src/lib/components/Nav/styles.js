import { resolve } from '$lib/helpers'

export let iconWrapper = options => {
  return [
    {
      classes:
        'transition duration-200 w-12 h-12 md:h-16 scale-125 pl-1 flex rounded-full flex-col items-center justify-center text-center md:w-16 fixed md:absolute bg-secondary shadow-secondary/30 shadow-xl right-8 top-10 md:left-8 md:top-1/2 md:-translate-y-1/2 z-[999]',
    },
    {
      on: [options.active, true],
      classes:
        'bg-transparent md:bg-primary md:bg-opacity-50 text-primary md:text-secondary',
    },
    {
      on: [options.active, false],
      classes: 'bg-secondary bg-opacity-75 text-primary',
    },
  ]
}

export let icon = options => {
  return [
    {
      classes: `scale-75 md:scale-100`,
    },
  ]
}
export let active = options => {
  return [
    {
      classes: `before:content-['+'] before:pr-3 decoration-secondary`,
    },
  ]
}

export let inactive = options => {
  return [
    {
      classes:
        'decoration-secondary hover:decoration-primary hover:opacity-50',
    },
  ]
}

export let link = options => {
  return [
    {
      classes: 'm-2',
    },
  ]
}

export let links = options => {
  return [
    {
      classes: 'flex justify-end',
    },
  ]
}

export let nav = options => {
  return [
    {
      classes: 'fixed top-0 left-0 right-0',
    },
    {
      on: [options.active, false],
      classes: '-translate-x-full opacity-25',
    },
    {
      on: [options.active, true],
      classes: 'translate-x-0 opacity-100',
    },
    {
      on: [options.type, 'primary'],
      classes: 'bg-neutral-light',
    },
    {
      on: [options.type, 'secondary'],
      classes: 'bg-secondary',
    },
  ]
}

export const config = props => {
  return {
    iconWrapper: resolve(iconWrapper(props)),
    icon: resolve(icon(props)),
    active: resolve(active(props)),
    inactive: resolve(inactive(props)),
    link: resolve(link(props)),
    nav: resolve(nav(props)),
    links: resolve(links(props)),
  }
}
