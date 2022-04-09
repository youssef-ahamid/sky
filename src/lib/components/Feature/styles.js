import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes:
        'relative h-[400px] w-[80%] sm:w-96 md:w-[450px] group',
    },
    {
      on: [options.reverse, true],
      classes:
        '',
    },
    {
      on: [options.reverse, false],
      classes: '',
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
      classes: 'absolute z-0 transition duration-500',
    },
    {
      classes: 'translate-y-48 translate-x-28',
      on: [options.active, true]
    }
  ]
}

export let title = options => {
  return [
    {
      classes: 'select-none pb-6 uppercase transition duration-700 ease-out origin-top-left w-[70%] leading-8',
    },
    {
      classes: 'scale-125',
      on: [options.active, true]
    },
    {
      classes: 'scale-[50%]',
      on: [options.active, false]
    }
  ]
}

export let content = options => {
  return [
    {
      classes: 'p-2 relative z-10 transition duration-500 ease-out',
    },
    {
      classes: 'translate-y-24 text-neutral-light',
      on: [options.active, true]
    }
  ]
}

export let otherImage = options => {
  return [
    {
      classes: 'absolute transition duration-500 ease-out',
    },
    {
      classes: 'delay-200 z-50 translate-x-60 opacity-100',
      on: [options.active, true]
    },
    {
      classes: 'z-0 opacity-0',
      on: [options.active, false]
    }
  ]
}

export let cta = options => {
  return [
    {
      classes: 'my-4',
    },
    {
      classes: 'opacity-100',
      on: [options.active, true]
    },
    {
      classes: 'opacity-0',
      on: [options.active, false]
    }
  ]
}
export let description = options => {
  return [
    {
      classes: '',
    },
    {
      classes: 'opacity-100',
      on: [options.active, true]
    },
    {
      classes: 'opacity-0',
      on: [options.active, false]
    }
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
