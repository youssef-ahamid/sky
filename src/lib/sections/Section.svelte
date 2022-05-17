<svelte:options accessors={true} />

<script>
  import Section from '$lib/components/Section/Section.svelte'
  import { getComponentData } from '$lib/helpers'

  export let className = ''
  export let preheader = ''
  export let title = ''
  export let color = ''
  export let identifier = ''
  export let fullHeight = false
  export let noContain = false
  export let background = {}
  export let content = {}

  $: invert = color == 'secondary'? 'text-primary': 'text-neutral-light'

  export const get = key => {
    return getComponentData(content, key)
  }


  /* styles */
  import { stylus } from '$lib/helpers'
  import { preheaderStyles, titleStyles } from './styles'

  $: prehead = stylus(preheaderStyles({ color: 'primary' }))
  $: tit = stylus(titleStyles())
</script>

<Section
  color="{invert}"
  className="bg-{invert} text-{color} {className}"
  {fullHeight}
  {noContain}
  id={identifier}
  bg={!!background ? background.url : ''}
>
  <h3 class={prehead.classes}>{preheader}</h3>
  <h2 class={tit.classes}>{title}</h2>

  <slot {get} />
</Section>
