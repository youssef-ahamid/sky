<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  import Image from '$lib/components/Image/Image.svelte'
  import List from '$lib/components/List/List.svelte'
  import { onMount } from 'svelte'
  import Section from './Section.svelte'
  export let section = {}
  export let awardsSection

  export let awards

  onMount(() => {
    awards = awardsSection.get('Award')
  })
</script>

<Section
  {...section}
  bind:this={awardsSection}
  let:get
  color="neutral-light"
  className="bg-primary py-8 md:py-24"
>
  <List
    items={awards}
    let:prop={award}
    let:index
    className="md:absolute md:right-[10%] md:top-1/2 md:-translate-y-1/2 grid grid-cols-2 justify-center w-full md:w-1/4"
  >
    <Animateonenterview type="flyUp" delay={1200 + 150 * index}>
      <Image
        type="award"
        {...award.image}
        alt="Sky for Trading & Contracting Awarded {award.title}"
      />
    </Animateonenterview>
  </List>
</Section>
