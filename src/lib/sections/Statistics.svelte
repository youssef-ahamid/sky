<script>
  import { getComponentData } from '$lib/helpers'

  export let preheader = ''
  export let title = ''
  export let fullHeight = false
  export let background = {}
  export let content = {}

  let statistics = getComponentData(content, 'Statistic')
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Tween from '$lib/components/Tween/Tween.svelte'
  let tweens = []
  let timeout
</script>

<Section
  color="secondary"
  {fullHeight}
  bg={background.url}
  className="text-neutral-light text-center"
>
  <div class="w-full max-w-[70%] md:max-w-md mx-auto py-4">
    <h3>{preheader}</h3>
    <h2>{title}</h2>
  </div>
  {#if !!statistics && statistics.length > 0}
    <div
      class="flex flex-wrap justify-center items-start space-x-6 my-4 w-full"
    >
      {#each statistics as stat, i}
        <Animateonenterview
          type="flyUp"
          on:enter={() => {
            timeout = setTimeout(() => {
              tweens[i].set(1)
            }, 200)
          }}
          on:exit={() => {
            tweens[i].set(0)
          }}
        >
          <p class="one-liner">{stat.title}</p>
          <p class="body-xl font-bold">
            +<Tween val={stat.number} bind:this={tweens[i]} />
          </p>
        </Animateonenterview>
      {/each}
    </div>
  {/if}
</Section>
