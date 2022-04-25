import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes:
        'relative w-80 md:w-[500px] h-64 md:h-72 z-0 focus-within:z-30 my-4 md:mx-4 md:my-16 mx-auto cursor-pointer group focus-visible:outline-none transition',
    },
  ]
}

export let left = options => {
  return [
    {
      classes: '',
    },
    {
      on: [options.reverse, true],
      classes: '',
    },
    {
      on: [options.reverse, false],
      classes: '',
    },
  ]
}

export let right = options => {
  return [
    {
      classes: '',
    },
  ]
}

export let image = options => {
  return [
    {
      classes: 'absolute inset-0 rounded-[50px] ring-primary ring-1 z-10 transition duration-500 w-full h-56 md:h-72 overflow-hidden object-contain object-center',
    },
    {
      classes: '',
      on: [options.active, true]
    }
  ]
}

export let title = options => {
  return [
    {
      classes: 'select-none absolute left-8 -top-10 uppercase transition duration-300 ease-out origin-top-left w-[70%] leading-8 scale-[50%] group-focus-within:top-2 group-focus-within:scale-[60%] group-focus-within:-translate-x-24 group-focus-within:-translate-y-20 text-neutral-dark',
    },
    {
      classes: '',
      on: [options.active, true]
    },
    {
      classes: '',
      on: [options.active, false]
    }
  ]
}

export let content = options => {
  return [
    {
      classes: 'p-2 w-4/5 z-20 relative transition duration-500 ease-out text-left group-focus-within:translate-y-12 group-focus-within:translate-x-4 group-focus-within:text-neutral-light',
    },
    {
      classes: '',
      on: [options.active, true]
    },
    {
      classes: '',
      on: [options.active, false]
    }
  ]
}

export let otherImage = options => {
  return [
    {
      classes: 'absolute transition duration-500 ease-out z-0 opacity-0 w-80 md:w-[500px] h-48 md:h-60 overflow-hidden object-contain object-center group-focus-within:delay-200 group-focus-within:z-10 ',
    },
    {
      classes: '',
      on: [options.active, true]
    },
    {
      classes: '',
      on: [options.active, false]
    }
  ]
}

export let cta = options => {
  return [
    {
      classes: 'my-4 opacity-0 hidden group-focus-within:block group-focus-within:opacity-100',
    },
  ]
}
export let description = options => {
  return [
    {
      classes: 'w-72 md:w-[400px] line-clamp-3 opacity-0 hidden group-focus-within:block group-focus-within:opacity-100 font-medium',
    },
  ]
}
let options
export const config = props => {
  options = props
  return {
    feature: resolve(feature(options)),
    left: resolve(left(options)),
    right: resolve(right(options)),
    image: resolve(image(options)),
    content: resolve(content(options)),
    title: resolve(title(options)),
    otherImage: resolve(otherImage(options)),
    cta: resolve(cta(options)),
    description: resolve(description(options)),
  }
}
