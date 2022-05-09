<script>
  /* props */
  export let items = [] // *, array of carrousel items
  export let currentStep = 0
  export let numPreviewedEachStep = 1
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  import List from '$lib/components/List/List.svelte'
  import Stepper from '$lib/components/Stepper/Stepper.svelte'
  import Button from '$lib/components/Button/Button.svelte'

  /* events */
  import { createEventDispatcher, onMount } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  /* methods */
  export const next = () => {
    if (currentStep < items.length - numPreviewedEachStep) currentStep += numPreviewedEachStep
    else dispatch('finish')
  }
  export const prev = () => {
    if (currentStep != 0) currentStep -= numPreviewedEachStep
    if (currentStep < 0) currentStep = 0
  }
  let carrouselItems = []
  export const select = num => {
    currentStep = num
    if (!carrouselItems[currentStep]) return
    if (num == items.length - 1)
      setTimeout(() => {
        dispatch('complete')
      }, 500)
    else dispatch('rewatch')
    carrouselItems[currentStep].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'start',
    })
  }

  $: select(currentStep)

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    carrouselWrapper,
    carrouselItem,
    carrouselControls,
    carrouselStepper,
    carrouselButtons,
    carrouselButton,
    carrousel,
  } from './styles'

  $: wrapper = stylus(carrouselWrapper(styleOptions))
  $: carr = stylus(carrousel(styleOptions))
  $: cItem = stylus(carrouselItem({ number: numPreviewedEachStep, ...styleOptions }))
  $: controls = stylus(carrouselControls(styleOptions))
  $: stepper = stylus(carrouselStepper(styleOptions))
  $: buttons = stylus(carrouselButtons(styleOptions))
  $: button = stylus(carrouselButton(styleOptions))

  onMount(() => {
    dispatch('rewatch')
  })

  let screenWidth
  $: mobile = screenWidth < 768
</script>

<svelte:window bind:outerWidth={screenWidth} />

<div class={`${wrapper.classes} ${className}`} style={wrapper.styles}>
  <List {items} let:prop={item} let:index className={carr.classes} styles={carr.classes}>
    <div
      bind:this={carrouselItems[items.indexOf(item)]}
      class={cItem.classes}
    >
      <slot {item} previewed={index < currentStep + numPreviewedEachStep && index >= currentStep} />
    </div>
  </List>
  {#key currentStep}
    <div class={controls.classes}>
      <Stepper
        direction="horizontal"
        steps={items.length}
        bind:active={currentStep}
        className={stepper.classes}
      />
      <div class={buttons.classes}>
        <Button
          label=""
          icon="chevron_left"
          type="primary"
          reverse
          shape="icon"
          on:click={prev}
        />
        <Button
          label=""
          icon="chevron_right"
          type="primary"
          shape="icon"
          on:click={next}
        />
      </div>
    </div>
  {/key}
</div>
