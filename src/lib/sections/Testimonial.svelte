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

  let trans = false

  /* styles */
  import { stylus } from '$lib/helpers'
  import { preheaderStyles, titleStyles } from './styles'
  import Testimonial from '$lib/components/Testimonial/Testimonial.svelte'
  import { mobile } from '$lib/stores'
  import Steps from '$lib/icons/waves/steps.svelte'

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
    loop
    let:item={testimonial}
    let:previewed
    numPreviewedEachStep={$mobile ? 1 : 2}
    on:next={(trans =-400)}
    on:prev={(trans = 400)}
  >
    {#if previewed}
      {#key testimonial}
        <div
          in:fly={{ x: trans, delay: 400 }}
          out:fly={{ x: -trans, duration: 300 }}
          class:absolute={!previewed}
        >
          <Testimonial {...testimonial} />
        </div>
      {/key}
    {/if}
  </Carrousel>
</Section>
