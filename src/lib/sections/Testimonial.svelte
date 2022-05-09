<script>
  import Carrousel from '$lib/components/Carrousel/Carrousel.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import { getComponentData } from '$lib/helpers'
  import { fly } from 'svelte/transition'

  export let preheader = ''
  export let title = ''
  export let fullHeight = false
  export let background = {}
  export let content = {}
  export let testimonials = getComponentData(content, 'Testimonial')

  /* styles */
  import { stylus } from '$lib/helpers'
  import { preheaderStyles, titleStyles } from './styles'
  import Testimonial from '$lib/components/Testimonial/Testimonial.svelte'

  $: prehead = stylus(preheaderStyles({ color: 'primary' }))
  $: tit = stylus(titleStyles())
</script>

<Section
  color="neutral"
  className="bg-neutral text-secondary py-12"
  {fullHeight}
  bg={!!background ? background.url : ''}
>
  <div class="md:max-w-[70%]" />
  <h3 class={prehead.classes}>{preheader}</h3>
  <h2 class={tit.classes}>{title}</h2>

  <Carrousel
    items={testimonials}
    let:item={testimonial}
    let:previewed
    numPreviewedEachStep={2}
  >
    {#if previewed}
      <div
        in:fly={{ x: 400, delay: 400 }}
        out:fly={{ x: -400, duration: 300 }}
      >
        <Testimonial {...testimonial} />
      </div>
    {/if}
  </Carrousel>
</Section>
