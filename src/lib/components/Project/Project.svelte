<script>
  import Button from '../Button/Button.svelte'
  import Go from '../Go/Go.svelte'
  import Image from '../Image/Image.svelte'

  export let className = ''
  export let preheader = ''
  export let title = ''
  export let description = ''
  export let clients = []
  export let image = {}
  export let services = []

  export let additionalImageData = {}
  export let cta = {}

  console.log(cta)

  if (!preheader)
    preheader = services
      .map(service => service.shortTitle)
      .join(' ● ')

  export let color = 'secondary'

  //   /* styles */
  //   import { stylus } from '$lib/helpers'
  //   import { imgWrapper, imgOverlay, img } from './styles'

  //   $: wrapper = stylus(imgWrapper(styleOptions))
  //   $: overlay = stylus(imgOverlay({ src, ...styleOptions }))
  //   $: image = stylus(img(styleOptions))
</script>

<div
  class="my-6 md:my-20 w-full flex flex-wrap lg:flex-nowrap items-center justify-center text-{color} {className}"
  {title}
>
  <div
    class="w-full min-w-fit {image.url || image.src
      ? 'md:w-[50%] md:min-w-min'
      : 'md:w-[70%] md:min-w-fit'} pr-4"
  >
    <h3
      class={color == 'secondary'
        ? 'text-primary'
        : 'text-neutral-light'}
    >
      {preheader}
    </h3>
    {#each clients as client}
      <Image type="logo" src={client.logo.url} alt={client.name} />
    {/each}
    <h2 class="uppercase">{title}</h2>
    <p class="max-w-[64ch] mt-6 md:mt-12">{description}</p>
    {#if !!cta.label}
      <Go
        to={cta.link}
        className="{color == 'secondary'
          ? 'text-primary'
          : 'text-neutral-light'} mt-5 md:mt-10 block"
      >
        <Button {...cta} />
      </Go>
    {/if}
  </div>

  {#if !!image.url || !!image.src}
    <div class="w-full md:w-[50%]">
      <Go to={cta.link}>
        <Image {...image} {...additionalImageData} />
      </Go>
    </div>
  {/if}
</div>
