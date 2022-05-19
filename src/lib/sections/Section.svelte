<svelte:options accessors={true} />

<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import { getComponentData } from '$lib/helpers'

  export let className = ''
  export let preheader = ''
  export let title = ''
  export let description = ''
  if (!description) description = ''
  export let color = ''
  export let bg = ''
  export let identifier = ''
  export let fullHeight = false
  export let noContain = false
  export let center = false
  export let background = {}
  export let content = {}

  $: invert = color == 'secondary' ? 'secondary' : 'neutral-light'

  export const get = key => {
    return getComponentData(content, key)
  }

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    preheaderStyles,
    titleStyles,
    descriptionStyles,
  } from './styles'

  $: prehead = stylus(preheaderStyles({ color }))
  $: tit = stylus(titleStyles({ center }))
  $: desc = stylus(descriptionStyles({ center }))
</script>

<Section
  color={invert}
  className="bg-{bg} text-{color} {className} {center
    ? 'text-center'
    : 'text-left'}"
  {fullHeight}
  {noContain}
  id={identifier}
  bg={!!background ? background.url : ''}
>
  {#if !!preheader}
    <Animateonenterview noExit type="flyLeft" delay="300">
      <h3 class={prehead.classes}>{preheader}</h3>
    </Animateonenterview>
  {/if}
  {#if !!title}
    <Animateonenterview
      noExit
      type={center ? 'flyUp' : 'flyLeft'}
      delay="500"
    >
      <h2 class={tit.classes} class:mx-auto={center}>{title}</h2>
    </Animateonenterview>
  {/if}
  {#if !!description}
    <Animateonenterview noExit type="flyLeft" delay="800">
      <p class={desc.classes}>{description}</p>
    </Animateonenterview>
  {/if}
  <slot {get} {color} />
</Section>
