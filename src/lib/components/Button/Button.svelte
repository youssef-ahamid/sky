<script>
  /* props */
  export let type = 'primary' // *, secondary
  export let shape = 'default' // *, ghost, full,
  export let icon = null // *, icon component
  export let className = '' // *, custom wrapper classes
  export let label = '' // *, button text
  export let active = true // *, false
  export let reverse = false // *, true
  export let styleOptions = {}

  /* styles */
  import { stylus } from '$lib/helpers'
  import { button, buttonLabel, buttonIcon } from './styles'

  $: wrapper = stylus(button({ type, active, shape, reverse, ...styleOptions }))
  $: name = stylus(buttonLabel({ type, active, shape, reverse, ...styleOptions }))
  $: bIcon = stylus(buttonIcon({ type, active, shape, reverse, ...styleOptions }))
</script>

<button
  on:click
  on:dblclick
  class={`${wrapper.classes} ${className}`}
  style={wrapper.styles}
  type="button"
>
  <h3 class={name.classes} style={name.styles}>
    {label}
  </h3>
  {#if !!icon}
    <span class={bIcon.classes} style={bIcon.styles}><svelte:component this={icon} /></span>
  {/if}
</button>
