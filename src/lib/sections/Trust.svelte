<script>
  import Image from '$lib/components/Image/Image.svelte'
  import Section from '$lib/sections/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import { onMount } from 'svelte'
  import List from '$lib/components/List/List.svelte'

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
  color="secondary"
  bind:this={trustedBy}
  id="trust"
  {...data}
  center
  className="py-16"
  noContain
>
  <List
    items={clients}
    let:index
    className="grid grid-cols-2 md:grid-cols-5 mx-auto relative py-5 items-center"
    let:prop={client}
  >
    <Animateonenterview type="flyUp" delay={100} className="m-4">
      <Image
        {...client.logo}
        alt={`${client.name} logo`}
        styleOptions={{ type: 'logo' }}
        className="md:grayscale-[1000] md:hover:grayscale-0 transition duration-300 ease-out mx-6"
      />
    </Animateonenterview>
  </List>
  <div
    class="absolute bottom-10 right-0 grid grid-cols-2 gap-8 whitespace-pre text-secondary text-left"
  >
    <Animateonenterview type="flyRight">
      <p class="whitespace-nowrap">
        <span class="font-bold">SKY</span> for Trading<br />&
        Contracting
      </p>
    </Animateonenterview>
    <Animateonenterview type="flyLeft">
      <p class="font-bold">Building<br />trust</p>
    </Animateonenterview>
  </div>
</Section>
