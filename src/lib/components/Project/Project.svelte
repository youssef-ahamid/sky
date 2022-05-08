<script>
import Button from "../Button/Button.svelte"
import Go from "../Go/Go.svelte"
import Image from "../Image/Image.svelte"

  export let className = ''
  export let preheader = ''
  export let title = ''
  export let description = ''
  export let clients = []
  export let image = {}
  export let additionalImageData = {}
  export let cta = {}
  export let services = []

  if (!preheader) preheader = services.map(service => service.shortTitle).join(' ● ')

  export let color = 'secondary'

//   /* styles */
//   import { stylus } from '$lib/helpers'
//   import { imgWrapper, imgOverlay, img } from './styles'

//   $: wrapper = stylus(imgWrapper(styleOptions))
//   $: overlay = stylus(imgOverlay({ src, ...styleOptions }))
//   $: image = stylus(img(styleOptions))
</script>


<div class="w-full flex flex-wrap lg:flex-nowrap items-center justify-center text-{color} {className}" {title}>
    <div class="w-full min-w-fit md:min-w-min {image.url || image.src? 'md:max-w-[50%]': 'md:max-w-[70%]'}">
        <h3 class="{color == 'secondary'? 'text-primary': 'text-neutral-light'}">{preheader}</h3>
        {#each clients as client }
            <Image type="logo" src={client.logo.url} alt={client.name} />
        {/each}
        <h2 class="uppercase">{title}</h2>
        <p class="max-w-[64ch] mt-6 md:mt-12">{description}</p>
        {#if !!cta.label }
            <Go to={cta.url} className="{color == 'secondary'? 'text-primary': 'text-neutral-light'}">
                <Button {...cta} />
            </Go>
        {/if}
    </div>

    <div class="w-full md:w-[50%]">
        <Image {...image} {...additionalImageData} />
    </div>
</div>