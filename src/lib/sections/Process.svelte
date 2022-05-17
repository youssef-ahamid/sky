<script>
  import { getComponentData } from '$lib/helpers'

  export let fullHeight = false
  export let background = {}
  export let content = {}
  export let preheader = ''
  export let title = ''
  export let description = ''

  let steps = getComponentData(content, 'Step')

  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import RoundedArrow from '$lib/icons/shape/rounded_arrow.svelte'
</script>

<Section
  color="secondary"
  className="text-secondary py-20"
  {fullHeight}
  bg={!!background ? background.url : ''}
  noContain
>
  <div
    class="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 md:p-8 max-w-[98%] md:max-w-[80%] mx-auto pb-12"
  >
    <Animateonenterview type="flyRight" className="min-w-[20rem]">
      <h3 class="text-primary">{preheader}</h3>
      <h2>{title}</h2>
    </Animateonenterview>
    <Animateonenterview type="flyLeft" className="lg:px-3">
      <p>{description}</p>
    </Animateonenterview>
  </div>

  <div
    class="flex flex-wrap flex-col md:flex-row justify-between items-start max-w-[90%] mx-auto md:my-20"
  >
    {#each steps as step, i}
      <div class="my-3 md:my-6 md:w-80 relative">
        <Animateonenterview delay={400 + 200 * i}>
          <div class="flex items-center my-4">
            <p class="text-primary text-4xl font-bold mr-3">
              0{i + 1}
            </p>
            <p class="font-bold text-xl">{step.title}</p>
          </div>
          <p class="">{step.text}</p>
        </Animateonenterview>

        {#if i < steps.length - 1}
          <Animateonenterview delay={400 + 200 * i}>
            <RoundedArrow
              className="hidden md:block w-52 absolute translate-x-1/2 text-primary 
              {i % 2 == 0
                ? 'top-full translate-y-8'
                : 'bottom-full -translate-y-8 rotate-180 scale-x-[-1]'}"
            />
          </Animateonenterview>
        {/if}
      </div>
    {/each}
  </div>
</Section>
