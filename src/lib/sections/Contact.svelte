<script>
  import Section from '$lib/components/Section/Section.svelte'
  import { getComponentData } from '$lib/helpers'

  export let preheader = ''
  export let title = ''
  export let fullHeight = false
  export let background = {}
  export let content = {}
  export let input = getComponentData(content, 'TextInput')

  let emailInput

  /* styles */
  import { stylus } from '$lib/helpers'
  import { preheaderStyles, titleStyles } from './styles'
  import TextInput from '$lib/components/Text Input/Text Input.svelte'

  $: prehead = stylus(preheaderStyles({ color: 'neutral-light' }))
  $: tit = stylus(titleStyles())
</script>

<Section
  color="secondary"
  className="bg-secondary text-neutral-light py-12"
  {fullHeight}
  bg={!!background ? background.url : ''}
>
  <div
    class="flex flex-col lg:flex-row items-start lg:items-center justify-between"
  >
    <div>
      <h3 class={prehead.classes}>{preheader}</h3>
      <h2 class={tit.classes}>{title}</h2>
    </div>
    <div class="flex justify-end w-full">
      <TextInput
        bind:this={emailInput}
        bind:value={input.value}
        {...input}
        className="my-4 mx-6 max-w-md ring-neutral-light"
        on:change={() => (emailInput.cta.label = 'send')}
      />
    </div>
  </div>
</Section>
