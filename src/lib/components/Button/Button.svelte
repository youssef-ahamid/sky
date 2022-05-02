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

  $: wrapper = stylus(
    button({ type, active, shape, reverse, ...styleOptions })
  )
  $: name = stylus(
    buttonLabel({ type, active, label, shape, reverse, ...styleOptions })
  )
  $: bIcon = stylus(
    buttonIcon({ type, active, shape, reverse, ...styleOptions })
  )
</script>

<!-- svelte-ignore component-name-lowercase -->
<button
  on:click
  on:dblclick
  class={`${wrapper.classes} ${className}`}
  style={wrapper.styles}
  type="button"
  data-text={label}
>
  <p class={name.classes} style={name.styles}>
    {label}
  </p>
  {#if !!icon}
    <span class={bIcon.classes} style={bIcon.styles}
      ><svelte:component this={icon} /></span
    >
  {/if}
</button>
