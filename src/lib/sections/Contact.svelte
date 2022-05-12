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
  export let inputs = getComponentData(content, 'TextInput')
  console.log(inputs, content)

  let emailInput

  /* styles */
  import { stylus } from '$lib/helpers'
  import { preheaderStyles, titleStyles } from './styles'
  import TextInput from '$lib/components/Text Input/Text Input.svelte'

  $: prehead = stylus(preheaderStyles({ color: 'primary' }))
  $: tit = stylus(titleStyles())
</script>

<Section
  color="secondary"
  className="bg-secondary text-neutral-light py-12"
  {fullHeight}
  bg={!!background ? background.url : ''}
>
  <div class="md:max-w-[70%]" />
  <h3 class={prehead.classes}>{preheader}</h3>
  <h2 class={tit.classes}>{title}</h2>

  <TextInput
    bind:this={emailInput}
    bind:value={inputs[0].value}
    {...inputs[0]}
    on:change={() => (emailInput.cta.label = 'send')}
  />
</Section>
