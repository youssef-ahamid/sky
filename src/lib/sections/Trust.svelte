<script>
  import Image from '$lib/components/Image/Image.svelte'
  import Carrousel from '$lib/components/Carrousel/Carrousel.svelte'
  import Section from '$lib/sections/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import { fly } from 'svelte/transition'
  import { mobile } from '$lib/stores'
  import { onMount } from 'svelte'

  export let data = {}
  export let transitionX = 800

  let trustedBy
  let clients = []

  onMount(() => {
    let clientgroup = trustedBy.get('ClientGroup')
    clients = clientgroup.clients
  })
</script>

<Section
  color="neutral"
  bind:this={trustedBy}
  id="trust"
  {...data}
  center
  className="py-16"
  noContain
>
  <Carrousel
    items={clients}
    loop
    className="flex justify-center items-center flex-wrap mx-auto relative"
    let:item={client}
    let:previewed
    numPreviewedEachStep={$mobile ? 4 : 6}
    on:next={(transitionX = -Math.abs(transitionX))}
    on:prev={(transitionX = Math.abs(transitionX))}
  >
    {#if previewed}
      <div
        in:fly={{ x: transitionX, duration: 600, delay: 500 }}
        out:fly={{ x: -transitionX, duration: 500 }}
      >
        <Animateonenterview type="flyUp" delay={100} className="m-6">
          <Image
            {...client.logo}
            alt={`${client.name} logo`}
            styleOptions={{ type: 'logo' }}
            className="md:grayscale-[1000] md:hover:grayscale-0 transition duration-300 ease-out mx-6"
          />
        </Animateonenterview>
      </div>
    {/if}
  </Carrousel>
  <div
    class="absolute bottom-10 right-0 grid grid-cols-2 gap-8 whitespace-pre text-secondary text-left"
  >
    <Animateonenterview type="flyRight">
      <p>
        <span class="font-bold">SKY</span> for Trading<br>& Contracting
      </p>
    </Animateonenterview>
    <Animateonenterview type="flyLeft">
      <p class="font-bold">Building<br>trust</p>
    </Animateonenterview>
  </div>
</Section>
