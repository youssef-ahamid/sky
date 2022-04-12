<script>
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'
  import Image from '$lib/components/Image/Image.svelte'

  import { slugify } from '$lib/helpers'
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import { fade, scale, slide } from 'svelte/transition'

  const features = [
    {
      title: 'il-monte galala',
      images: [
        {
          src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
        },
        {
          src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
        },
      ],
      description:
        'khod ahla description 3ala dmaghak khod ahla description 3ala dmaghakkhod ahla description 3ala dmaghak',
    },
    {
      title: 'il-monte galala',
      images: [
        {
          src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
        },
        {
          src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
        },
      ],
      description:
        'khod ahla description 3ala dmaghak khod ahla description 3ala dmaghak khod ahla description 3ala dmaghak',
    },
    {
      title: 'il-monte galala',
      images: [
        {
          src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
        },
        {
          src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
        },
      ],
      description:
        'khod ahla description 3ala dmaghak khod ahla description 3ala dmaghakkhod ahla description 3ala dmaghak',
    },
  ]

  const aboutImage = {
    src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
  }

  const logos = [
    {
      src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
    },
    {
      src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
    },
  ]

  const links = [
    {
      to: '/hamada',
      text: 'hamada',
    },
    {
      to: '/hamada',
      text: 'hamada',
    },
    {
      to: '/hamada',
      text: 'hamada',
    },
    {
      to: '/hamada',
      text: 'hamada',
    },
  ]

  let overlay = null

  const overlayProjects = i => {
    overlay = i
    console.log(overlay)
  }
  const unOverlayProjects = () => {
    overlay = null
  }
</script>

<Section id="home">
  <Hero fullHeight />
</Section>

<Section id="trust">
  <Animateonenterview>
    <h2 class="md:mx-3 py-6">Trusted By</h2>
  </Animateonenterview>

  <List
    items={logos}
    let:prop={logo}
    className="py-6 justify-around flex flex-wrap"
  >
    <Image {...logo} styleOptions={{ size: 'sm' }} />
  </List>

  <Animateonenterview>
    <div class="py-12 md:py-20 flex justify-center">
      <p
        class="text-center text-primary font-medium whitespace-pre-line"
      >
        Building trust 
        Reliable.
      </p>
    </div>
  </Animateonenterview>
</Section>

<Section id="projects" className="bg-secondary overflow-hidden pb-12 md:pb-32">
  <Animateonenterview>
    <div class="py-16 md:py-48 flex justify-center">
      <p
        class="text-center text-neutral-light font-medium whitespace-pre-line"
      >
        Building the future of Building
        Committed.
      </p>
    </div>
  </Animateonenterview>

  <Animateonenterview>
    <h2 class="text-neutral-light md:mx-3 py-6">Featured projects</h2>
  </Animateonenterview>

  <div class="relative w-auto h-auto">
    <List
      items={features}
      let:prop={feature}
      let:index
      className="flex justify-center md:justify-between flex-wrap mx-auto relative"
    >
      <Animateonenterview
        type={index % 2 === 0 ? 'flyLeft' : 'flyRight'}
        className="overflow-visible relative w-full h-full {overlay ==
        index
          ? 'z-30'
          : 'z-0'}"
      >
        {#if overlay != index && !!overlay}
          <div
            transition:fade={{ duration: 300 }}
            class="absolute inset-0 bg-secondary transition duration-300 ease-out bg-opacity-80 z-30 pointer-events-none"
          />
        {/if}
        <Feature
          {...feature}
          on:focus={() => {
            overlayProjects(index)
          }}
          on:blur={unOverlayProjects}
        >
          <p slot="description">{feature.description}</p>
          <div
            class="transition duration-700 w-[50%] group-focus:-translate-x-24 group-focus:md:-translate-x-44 md:w-[40%] inset-0 absolute  overflow-hidden"
          >
            <div
              class=" h-96  bg-neutral-light rotate-[50deg] transform origin-top-right"
            />
          </div>
          <div slot="cta">
            <Go to="/projects/{slugify(feature.title)}">
              <Button
                label="more"
                className="hover:bg-secondary hover:text-neutral-light text-secondary bg-neutral-light"
              />
            </Go>
          </div>
        </Feature>
      </Animateonenterview>
    </List>
  </div>
</Section>

<Section id="about">
  <Hero className="py-16 md:py-36">
    <Animateonenterview
      slot="left"
      type="flyLeft"
      className="flex flex-col"
    >
      <h2>Who we are</h2>
      <div class="md:w-[90%]">
        Learn
        <Button
          type="primary"
          label="more"
          className="inline-block"
        />
        about our team & founders
      </div>
    </Animateonenterview>

    <Animateonenterview slot="right" type="flyRight" className="scale-[125%]">
      <Image {...aboutImage} />
    </Animateonenterview>
  </Hero>
</Section>
