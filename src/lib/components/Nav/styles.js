import { resolve } from '$lib/helpers'

export let iconWrapper = options => {
  return [
    {
      classes:
        'transition duration-300 ease-out delay-[400ms] bg-neutral-light text-primary w-12 h-12 scale-125 pl-1 flex rounded-full flex-col items-center justify-center text-center md:w-16 fixed md:hidden bg-secondary shadow-secondary/30 right-8 top-10 z-[999]',
    },
    {
      on: [options.active, true],
      classes:
        'shadow-none',
    },
    {
      on: [options.active, false],
      classes:
        'shadow-lg',
    },
  ]
}

export let icon = options => {
  return [
    {
      classes: `transition duration-500 delay-100`,
    },
    {
      on: [options.active, true],
      classes:
        'rotate-[270deg] scale-90',
    },
    {
      on: [options.active, false],
      classes:
        'scale-75',
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
      classes: 'm-2 text-primary',
    },
  ]
}

export let links = options => {
  return [
    {
      classes: 'max-w-7xl mx-auto flex flex-col md:flex-row justify-end py-12 md:py-4 md:px-2',
    },
  ]
}

export let nav = options => {
  return [
    {
    classes: 'fixed ring ring-primary -ml-1 md:ml-0 md:ring-transparent transition duration-500 ease-out top-0 left-0 bottom-0 md:bottom-auto md:translate-x-0 md:right-0 w-full p-4 z-[998]',
    },
    {
      on: [options.type, 'primary'],
      classes: 'bg-neutral-light',
    },
    {
      on: [options.type, 'secondary'],
      classes: 'bg-secondary',
    },
    ,
    {
      on: [options.active, true],
      classes:
        'translate-x-0',
    },
    {
      on: [options.active, false],
      classes: '-translate-x-full',
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
