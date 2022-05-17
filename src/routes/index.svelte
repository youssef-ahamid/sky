<script context="module">
  import { getProjectPreviews, getClients } from '$lib/gql'

  export async function load() {
    let projects = await getProjectPreviews()
    let clients = await getClients()

    return {
      props: {
        projects,
        clients
      },
    }
  }
</script>

<script>

  export let projects, clients

  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import Carrousel from '$lib/components/Carrousel/Carrousel.svelte'

  import { slugify } from '$lib/helpers'
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  const features = projects
  let trans = 400
  

  const services = [
    {
  title: 'Infrastructure Works',
  image: 'https://i.ibb.co/FX3PbDT/Infrastructure.jpg',
  description: 'Solorerferum ipit omnis earibus cipiciae volestia ',

    },
    {
  title: 'Finishing Works',
  image: 'https://i.ibb.co/zNr6KNc/shutterstock-670454113-scaled-e1611478996191.jpg',
  description: 'Solorerferum ipit omnis earibus cipiciae volestia ',

    }, {
  title: 'Turnkey Projects',
  image: 'https://i.ibb.co/QYD0v0X/Screen-Shot-2022-04-03-at-12-50-08-PM.png',
  description: 'Solorerferum ipit omnis earibus cipiciae volestia ',

    }, {
  title: 'MEP Works',
  image: 'https://i.ibb.co/3rJkrgQ/1638647450744.jpg',
  description: 'Solorerferum ipit omnis earibus cipiciae volestia ',

    }, {
  title: 'Trading',
  image: 'https://i.ibb.co/7YBnMSw/HVAC-System-Office-Building.jpg',
  description: 'Solorerferum ipit omnis earibus cipiciae volestia ',

    },
  ]


  import Triangles from '$lib/components/Triangles/Triangles.svelte';
  import { mobile } from '$lib/stores';
  import { fly } from 'svelte/transition';

  let Y, height
</script>

<svelte:window bind:scrollY={Y} bind:innerHeight={height} />

<Section color="secondary" fullHeight id="home" className="relative" bg="https://media.graphassets.com/OXVoxwYCTrCHsQ0jxHfA?_gl=1*8eev2b*_ga*MTAyNzk5OTI1My4xNjUyMjYwNDc4*_ga_G6FYGSYGZ4*MTY1MjUzNDI0Ny45LjEuMTY1MjUzNTA2OC42MA..">
  <Hero fullHeight className="text-white -mt-12 md:mt-0">
    <div class="flex flex-col items-start space-y-4">
      <Animateonenterview type="flyLeft" delay="200">
        <h1 class="whitespace-pre-line">You dream it, 
          we make it</h1>
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="500">
        <p class="max-w-[700px]">We have delivered value for clients in Egypt and Beyond. Browse our projects or download our company profile to know more about our work.</p>
      </Animateonenterview>
      <Animateonenterview delay="1200">
        <Go to="/projects" className="my-8">
          <Button label="Browse projects" icon="chevron_right" shape="ghost" />
        </Go>
      </Animateonenterview>
    </div>
  </Hero>
</Section>

<Section color="neutral" id="trust" className="text-secondary py-16" noContain>
  <Animateonenterview>
    <h2 class="md:mx-3 pt-6 whitespace-pre-line text-center">
      Trusted By
    </h2>
  </Animateonenterview>

  
  <Carrousel
    items={clients}
    loop
    autoplay
    noControls
    className="flex justify-center items-center flex-wrap mx-auto relative"
    let:item={client}
    let:previewed
    numPreviewedEachStep={$mobile ? 4 : 6}
    on:next={(trans =-800)}
    on:prev={(trans = 800)}
  >
    {#if previewed}
      <div
        in:fly={{ x: trans, duration: 600, delay: 500 }}
        out:fly={{ x: -trans, duration: 500 }}
      >
      <Animateonenterview className="m-6">
        <Image {...client.logo} alt={`${client.name} logo`} styleOptions={{ type: 'logo' }} className="md:grayscale-[1000] md:hover:grayscale-0 transition duration-300 ease-out mx-6" />
      </Animateonenterview>
      </div>
    {/if}
    </Carrousel>
  <div class="absolute bottom-10 right-0 grid grid-cols-2 gap-8 whitespace-pre text-secondary">
    <Animateonenterview type="flyRight">
      <p>
        <span class="font-bold">SKY</span> for Trading
& Contracting
      </p>
    </Animateonenterview>
    <Animateonenterview type="flyLeft">
    <p class="font-bold">
      Building
trust
    </p>
  </Animateonenterview>
  </div>
</Section>

<Section color="neutral-light" id="projects" className="overflow-hidden pb-12 md:pb-32">
  <Animateonenterview>
    <h2 class="text-neutral-dark md:mx-3 py-6 whitespace-pre-line">Featured projects</h2>
  </Animateonenterview>

  <div class="relative w-auto h-auto">
    <List
      items={features}
      let:prop={feature}
      let:index
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto relative justify-center md:justify-between"
    >
      <Go to="/projects/{feature.slug}">
      <Animateonenterview
        type={index % 2 === 0 ? 'flyLeft' : 'flyRight'}
        className="overflow-visible relative w-full h-full"
      >
        <Feature {...feature} active={$mobile}>
          <p slot="description" class="font-normal line-clamp-3">{feature.description}</p>
          <Triangles />
          <div slot="cta">
            <Go to="/projects/{feature.slug}">
              <Button
                label="more"
                type="primary"
              />
            </Go>
          </div>
        </Feature>
      </Animateonenterview>
    </Go>
    </List>
  </div>
</Section>

<Section id="services" className="overflow-visible">
  <div class="flex-col items-center flex lg:flex-none lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:place-items-center py-20 overflow-visible">
    <Animateonenterview type="flyLeft">
      <div class="flex-col">
        <h2>Our services</h2>
        <p>A comprehensive range of services for everyone.</p>
        <Go to="/services">
          <Button label="more" type="primary" className="my-4 md:mt-12" />
        </Go>
      </div>
    </Animateonenterview>
    {#each services as service, i }
      <Animateonenterview className="overflow-visible">
        <div class="w-full text-left relative group z-0 hover:z-50 focus-visible:z-50 focus-visible:outline-none">
          <div class="pointer-events-none transform {i % 3 == 0? '-skew-y-3': i % 2 == 0? 'skew-y-3': 'skew-y-1'} absolute z-0 opacity-0 translate-x-6 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[230%] group-focus-visible:opacity-100 inset-0 origin-center bg-secondary rounded-3xl"></div>
          <div class="m-4 p-4 h-40 w-72 md:w-80 z-10 relative">
            <div style="background-image: url('{service.image});" class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"></div>
            <div class="absolute inset-0 bg-secondary opacity-50 group-hover:opacity-0 transition duration-300 ease-out z-[5]"></div>
            <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-focus-visible:-translate-x-4 z-10 relative group-focus-visible:-translate-y-[150%] group-hover:-translate-x-4 group-hover:-translate-y-[150%] transition duration-300 ease-out">{service.title}</h4>
          </div>
          <p class="m-4 opacity-0 line-clamp-3 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-[110%] group-hover:opacity-100 group-focus-visible:translate-y-[120%] group-focus-visible:opacity-100 transition duration-300 ease-out">{service.description}</p>
        </div>
      </Animateonenterview>
    {/each}
  </div>
</Section>
