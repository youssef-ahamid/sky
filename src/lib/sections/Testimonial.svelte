<script>
  import Carrousel from '$lib/components/Carrousel/Carrousel.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import { getComponentData } from '$lib/helpers'
  import { fly } from 'svelte/transition'

  export let preheader = ''
  export let title = ''
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
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  $: prehead = stylus(preheaderStyles({ color: 'primary' }))
  $: tit = stylus(titleStyles())
</script>

<Section
  color="neutral"
  className="bg-neutral text-secondary py-12"
  bg={!!background ? background.url : ''}
>
  <Animateonenterview type="flyLeft" delay="100">
    <h3 class={prehead.classes}>{preheader}</h3>
  </Animateonenterview>
  <Animateonenterview type="flyLeft" delay="300">
    <h2 class={tit.classes}>{title}</h2>
  </Animateonenterview>

  <Carrousel
    items={testimonials}
    className="h-[400px] md:h-[400px]"
    loop
    let:item={testimonial}
    let:previewed
    numPreviewedEachStep={$mobile ? 1 : 2}
    on:next={() => {
      trans = -400
    }}
    on:prev={() => {
      trans = 400
    }}
  >
    {#if previewed}
      {#key testimonial}
        <Animateonenterview
          type="flyUp"
          delay="300"
          noExit
          className="mb-6"
        >
          <div
            in:fly={{ x: trans, delay: 400 }}
            out:fly={{ x: -trans, duration: 300 }}
          >
            <Testimonial {...testimonial} />
          </div>
        </Animateonenterview>
      {/key}
    {/if}
  </Carrousel>
</Section>
