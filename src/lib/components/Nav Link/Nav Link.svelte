<script>
  export let className = ''
  export let to = ''
  export let text = ''
  export let download = false
  export let redirect = false
  export let active = false
  export let activeSub = 0
  export let links = []
  export let styleOptions = {}

  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'

  import { slide } from 'svelte/transition'

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    navLinkWrapper,
    navSublinkList,
    navSublink,
    navSublinkActive,
    navSublinkInactive,
  } from './styles'

  $: wrapper = stylus(navLinkWrapper({ active, ...styleOptions }))
  $: list = stylus(navSublinkList({ active, ...styleOptions }))
  $: sublink = stylus(navSublink({ active, ...styleOptions }))
</script>

<Go {to} {redirect} {download} on:click>
  <p class={`${wrapper.classes} ${className}`}>
    {#if text != ''}
      {text}
    {:else}
      <slot />
    {/if}
  </p>
</Go>
