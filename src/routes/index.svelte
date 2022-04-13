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
  import Nav from '$lib/components/Nav/Nav.svelte'

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
  }
  const unOverlayProjects = () => {
    overlay = null
  }
</script>

<Nav {links} styleOptions={{ type: 'primary' }}/>

<Section id="home" className="bg-secondary">
  <div class="absolute left-[12%] bottom-0 top-[40%] w-1 rounded-full bg-neutral-light bg-opacity-30 scale-y-150 origin-top"></div>
  <Hero fullHeight>
    <div class="flex-col text-neutral-light">
      <p>SKY for Trading and Contracting</p>  
      <h1 class="py-2 md:py-4 font-bold">You dream it, we <span class="bg-primary text-neutral-light">make</span> it</h1>
      <div class="flex py-12">
        <Button type="primary" label="contact us" />
        <Button type="primary" label="more" className="mx-5" />
      </div>
    </div>
    </Hero>
</Section>

<Section id="trust" noContain>
  <Animateonenterview className="max-w-[90%] md:max-w-[80%] mx-auto">
    <h2 class="md:mx-3 py-6">Trusted By</h2>
  </Animateonenterview>

  <List
    items={logos}
    let:prop={logo}
    className="py-6 justify-evenly flex flex-wrap"
  >
    <Animateonenterview>
      <Image {...logo} styleOptions={{ size: 'sm' }} />
    </Animateonenterview>
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

<Section id="services">
  <Hero fullHeight>
    <div class="md:grid md:grid-rows-2 md:grid-cols-3 md:place-items-center">
      <Animateonenterview type="flyLeft">
        <div class="flex-col">
          <h2>Our services</h2>
          <p>lorem ipsum</p>
          <Button label="more" type="primary" className="my-4 md:mt-12" />
        </div>
      </Animateonenterview>
      <Animateonenterview>
      <div class="w-full relative group z-0 hover:z-50">
        <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[15deg] transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[150%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
        <div class="m-4 p-4 h-40 bg-primary z-10 relative">
          <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-hover:-translate-x-4 group-hover:-translate-y-[130%] transition duration-300 ease-out">infrastructure planning</h4>
        </div>
        <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-full group-hover:opacity-100 transition duration-300 ease-out">helloooo from under the service</p>
      </div>
    </Animateonenterview>
    <Animateonenterview>
      <div class="w-full relative group z-0 hover:z-50">
        <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[15deg] transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[150%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
        <div class="m-4 p-4 h-40 bg-primary z-10 relative">
          <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-hover:-translate-x-4 group-hover:-translate-y-[130%] transition duration-300 ease-out">infrastructure planning</h4>
        </div>
        <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-full group-hover:opacity-100 transition duration-300 ease-out">helloooo from under the service</p>
      </div>
    </Animateonenterview>
    <Animateonenterview>
      <div class="w-full relative group z-0 hover:z-50">
        <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[15deg] transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[150%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
        <div class="m-4 p-4 h-40 bg-primary z-10 relative">
          <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-hover:-translate-x-4 group-hover:-translate-y-[130%] transition duration-300 ease-out">infrastructure planning</h4>
        </div>
        <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-full group-hover:opacity-100 transition duration-300 ease-out">helloooo from under the service</p>
      </div>
    </Animateonenterview>
    <Animateonenterview>
      <div class="w-full relative group z-0 hover:z-50">
        <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[15deg] transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[150%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
        <div class="m-4 p-4 h-40 bg-primary z-10 relative">
          <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-hover:-translate-x-4 group-hover:-translate-y-[130%] transition duration-300 ease-out">infrastructure planning</h4>
        </div>
        <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-full group-hover:opacity-100 transition duration-300 ease-out">helloooo from under the service</p>
      </div>
    </Animateonenterview>
    <Animateonenterview>
      <div class="w-full relative group z-0 hover:z-50">
        <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[15deg] transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[150%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
        <div class="m-4 p-4 h-40 bg-primary z-10 relative">
          <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-hover:-translate-x-4 group-hover:-translate-y-[130%] transition duration-300 ease-out">infrastructure planning</h4>
        </div>
        <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-full group-hover:opacity-100 transition duration-300 ease-out">helloooo from under the service</p>
      </div>
    </Animateonenterview> 
    </div>
  </Hero>
</Section>

<Hero fullHeight>
  <div class="py-56 px-8 overflow-hidden md:overflow-visible text-center">
    <div class="relative inline-block group z-0 hover:z-50">
      <div class="group-hover:opacity-100 pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[60deg] transition duration-300 ease-out top-0 bottom-0 left-0 w-0 h-0 scale-150 border-l-[300px] border-b-[180px] border-t-[40px] border-b-transparent border-t-transparent border-l-secondary"></div>
      <p class="body-lg font-bold text-primary mx-1 group-hover:text-neutral-light transition duration-300 ease-out z-10 relative">innovative,</p>
    </div>
    <div class="relative inline-block group z-0 hover:z-50">
      <div class="group-hover:opacity-100 pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[45deg] transition duration-300 ease-out top-0 bottom-0 left-0 w-0 h-0 scale-150 border-l-[300px] border-b-[180px] border-t-[40px] border-b-transparent border-t-transparent border-l-secondary"></div>
      <p class="body-lg font-bold text-primary mx-1 group-hover:text-neutral-light transition duration-300 ease-out z-10 relative">innovative,</p>
    </div>
    <div class="relative inline-block group z-0 hover:z-50">
      <div class="group-hover:opacity-100 pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[25deg] transition duration-300 ease-out top-0 bottom-0 left-0 w-0 h-0 scale-150 border-l-[300px] border-b-[180px] border-t-[40px] border-b-transparent border-t-transparent border-l-secondary"></div>
      <p class="body-lg font-bold text-primary mx-1 group-hover:text-neutral-light transition duration-300 ease-out z-10 relative">innovative,</p>
    </div>
    <div class="relative inline-block group z-0 hover:z-50">
      <div class="group-hover:opacity-100 pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[10deg] transition duration-300 ease-out top-0 bottom-0 left-0 w-0 h-0 scale-150 border-l-[300px] border-b-[180px] border-t-[40px] border-b-transparent border-t-transparent border-l-secondary"></div>
      <p class="body-lg font-bold text-primary mx-1 group-hover:text-neutral-light transition duration-300 ease-out z-10 relative">innovative,</p>
    </div>
    <div class="relative inline-block group z-0 hover:z-50">
      <div class="group-hover:opacity-100 pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[0deg] transition duration-300 ease-out top-0 bottom-0 left-0 w-0 h-0 scale-150 border-l-[300px] border-b-[180px] border-t-[40px] border-b-transparent border-t-transparent border-l-secondary"></div>
      <p class="body-lg font-bold text-primary mx-1 group-hover:text-neutral-light transition duration-300 ease-out z-10 relative">innovative</p>
    </div>
  </div>
</Hero>

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
