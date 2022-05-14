<script context="module">
  import { getProjectPreviews, getSection } from '$lib/gql'

  export async function load() {
    let projects = await getProjectPreviews()
    let contact = await getSection('contact')

    return {
      props: {
        projects,
        contact
      },
    }
  }
</script>

<script>

  export let projects, contact

  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'
  import Image from '$lib/components/Image/Image.svelte'

  import { slugify } from '$lib/helpers'
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  const features = projects

  const aboutImage = {
    src: 'https://i.ibb.co/MG9r206/Screen-Shot-2022-04-03-at-1-59-16-PM.png',
  }

  const logos = [
    {
      src: 'https://i.ibb.co/VpRGQLQ/logo-57371358399.png',
    },
    {
      src: 'https://i.ibb.co/58DdS3d/HSBC-Symbol.png',
    },
    {
      src: 'https://i.ibb.co/3vCnScV/HHR-Logo-Color-HR.png',
    },
    {
      src: 'https://i.ibb.co/ZTQ5ck7/th.jpg',
    },
    {
      src: 'https://i.ibb.co/gPgRm3n/18056466-1563980143613615-208734119081921344-o.png',
    },
    {
      src: 'assets/logos/pharmaoverseas.png'
    },
    {
      src: 'assets/logos/alahly.png'
    },
    {
      src: 'assets/logos/ashrae.png'
    },
    {
      src: 'assets/logos/NBE.jpeg'
    },
    {
      src: 'assets/logos/vodafone.png'
    },
    {
      src: 'assets/logos/zahran.png'
    },
  ]

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

  import Card from '$lib/components/Card/Card.svelte';
  import Triangles from '$lib/components/Triangles/Triangles.svelte';
import Contact from '$lib/sections/Contact.svelte';

  let Y, height
</script>

<svelte:window bind:scrollY={Y} bind:innerHeight={height} />

<Section color="secondary" fullHeight id="home" className="relative" bg="https://media.graphassets.com/OXVoxwYCTrCHsQ0jxHfA?_gl=1*8eev2b*_ga*MTAyNzk5OTI1My4xNjUyMjYwNDc4*_ga_G6FYGSYGZ4*MTY1MjUzNDI0Ny45LjEuMTY1MjUzNTA2OC42MA..">
  <Hero fullHeight className="text-white -mt-12 md:mt-0">
    <div class="flex flex-col items-start space-y-4">
      <Animateonenterview type="flyLeft">
        <p class="text-lg md:text-3xl font-extralight whitespace-pre"><span class="font-bold">SKY</span> for Trading 
        & Contracting</p>
      </Animateonenterview>
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

<Section color="secondary" id="trust" className="text-secondary py-16">

  <Animateonenterview>
    <h2 class="md:mx-3 py-6 whitespace-pre-line text-center">
      Trusted By
    </h2>
  </Animateonenterview>
  <List
    items={logos}
    let:prop={logo}
    let:index
    className="flex justify-center flex-wrap mx-auto relative"
  >
    <Animateonenterview className="m-3">
      <Image {...logo} styleOptions={{ size: 'sm' }} className="grayscale-[1000] hover:grayscale-0 transition duration-300 ease-out" />
    </Animateonenterview>
  </List>
  <div class="absolute bottom-0 right-0 grid grid-cols-2 gap-8 whitespace-pre text-secondary">
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
    <h2 class="text-neutral-dark md:mx-3 py-6 whitespace-pre-line">Featured
      projects</h2>
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
        className="overflow-visible relative w-full h-full"
      >
        <Feature {...feature}>
          <p slot="description" class="font-normal line-clamp-3">{feature.description}</p>
          <Triangles />
          <div slot="cta">
            <Go to="/projects/{slugify(feature.title)}">
              <Button
                label="more"
                type="primary"
              />
            </Go>
          </div>
        </Feature>
      </Animateonenterview>
    </List>
  </div>
</Section>

<Contact {...contact} />


<!-- <Section id="services" className="overflow-visible">
    <div class="flex-col items-center flex lg:flex-none lg:grid lg:grid-rows-2 lg:grid-cols-3 lg:place-items-center py-20 overflow-visible">
      <Animateonenterview type="flyLeft">
        <div class="flex-col">
          <h2>Our services</h2>
          <p>A comprehensive range of services for everyone.</p>
          <Button label="more" type="primary" className="my-4 md:mt-12" />
        </div>
      </Animateonenterview>
      <Animateonenterview className="overflow-visible">
        <div class="w-full text-left relative group z-0 hover:z-50 focus-visible:z-50 focus-visible:outline-none">
          <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[3deg] translate-x-6 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[180%] group-focus-visible:opacity-100 group-focus-visible:scale-[180%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
          <div class="m-4 p-4 h-40 w-72 md:w-80 z-10 relative">
            <div style="background-image: url('{services[0].image});" class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"></div>
            <div class="absolute inset-0 bg-secondary opacity-50 group-hover:opacity-0 transition duration-300 ease-out z-[5]"></div>
            <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-focus-visible:-translate-x-4 z-10 relative group-focus-visible:-translate-y-[150%] group-hover:-translate-x-4 group-hover:-translate-y-[150%] transition duration-300 ease-out">{services[0].title}</h4>
          </div>
          <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-[110%] group-hover:opacity-100 group-focus-visible:translate-y-[120%] group-focus-visible:opacity-100 transition duration-300 ease-out">{services[0].description}</p>
        </div>
      </Animateonenterview>
      <Animateonenterview className="overflow-visible">
        <div class="w-full text-left relative group z-0 hover:z-50 focus-visible:z-50 focus-visible:outline-none">
          <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[3deg] translate-x-6 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[180%] group-focus-visible:opacity-100 group-focus-visible:scale-[180%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
          <div class="m-4 p-4 h-40 w-72 md:w-80 z-10 relative">
            <div style="background-image: url('{services[1].image});" class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"></div>
            <div class="absolute inset-0 bg-secondary opacity-50 group-hover:opacity-0 transition duration-300 ease-out z-[5]"></div>
            <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-focus-visible:-translate-x-4 z-10 relative group-focus-visible:-translate-y-[150%] group-hover:-translate-x-4 group-hover:-translate-y-[150%] transition duration-300 ease-out">{services[1].title}</h4>
          </div>
          <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-[110%] group-hover:opacity-100 group-focus-visible:translate-y-[120%] group-focus-visible:opacity-100 transition duration-300 ease-out">{services[1].description}</p>
        </div>
      </Animateonenterview>
      <Animateonenterview className="overflow-visible">
        <div class="w-full text-left relative group z-0 hover:z-50 focus-visible:z-50 focus-visible:outline-none">
          <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[3deg] translate-x-6 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[180%] group-focus-visible:opacity-100 group-focus-visible:scale-[180%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
          <div class="m-4 p-4 h-40 w-72 md:w-80 z-10 relative">
            <div style="background-image: url('{services[2].image});" class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"></div>
            <div class="absolute inset-0 bg-secondary opacity-50 group-hover:opacity-0 transition duration-300 ease-out z-[5]"></div>
            <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-focus-visible:-translate-x-4 z-10 relative group-focus-visible:-translate-y-[150%] group-hover:-translate-x-4 group-hover:-translate-y-[150%] transition duration-300 ease-out">{services[2].title}</h4>
          </div>
          <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-[110%] group-hover:opacity-100 group-focus-visible:translate-y-[120%] group-focus-visible:opacity-100 transition duration-300 ease-out">{services[2].description}</p>
        </div>
      </Animateonenterview>
      <Animateonenterview className="overflow-visible">
        <div class="w-full text-left relative group z-0 hover:z-50 focus-visible:z-50 focus-visible:outline-none">
          <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[3deg] translate-x-6 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[180%] group-focus-visible:opacity-100 group-focus-visible:scale-[180%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
          <div class="m-4 p-4 h-40 w-72 md:w-80 z-10 relative">
            <div style="background-image: url('{services[3].image});" class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"></div>
            <div class="absolute inset-0 bg-secondary opacity-50 group-hover:opacity-0 transition duration-300 ease-out z-[5]"></div>
            <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-focus-visible:-translate-x-4 z-10 relative group-focus-visible:-translate-y-[150%] group-hover:-translate-x-4 group-hover:-translate-y-[150%] transition duration-300 ease-out">{services[3].title}</h4>
          </div>
          <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-[110%] group-hover:opacity-100 group-focus-visible:translate-y-[120%] group-focus-visible:opacity-100 transition duration-300 ease-out">{services[3].description}</p>
        </div>
      </Animateonenterview>
      <Animateonenterview className="overflow-visible">
        <div class="w-full text-left relative group z-0 hover:z-50 focus-visible:z-50 focus-visible:outline-none">
          <div class="pointer-events-none translate-y-18 absolute z-0 opacity-0 rotate-[3deg] translate-x-6 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-[180%] group-focus-visible:opacity-100 group-focus-visible:scale-[180%] top-0 bottom-0 right-0 w-0 h-0 border-l-[100px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-secondary"></div>
          <div class="m-4 p-4 h-40 w-72 md:w-80 z-10 relative">
            <div style="background-image: url('{services[4].image});" class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"></div>
            <div class="absolute inset-0 bg-secondary opacity-50 group-hover:opacity-0 transition duration-300 ease-out z-[5]"></div>
            <h4 class="text-xl md:text-3xl text-neutral-light font-bold group-focus-visible:-translate-x-4 z-10 relative group-focus-visible:-translate-y-[150%] group-hover:-translate-x-4 group-hover:-translate-y-[150%] transition duration-300 ease-out">{services[4].title}</h4>
          </div>
          <p class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-[110%] group-hover:opacity-100 group-focus-visible:translate-y-[120%] group-focus-visible:opacity-100 transition duration-300 ease-out">{services[4].description}</p>
        </div>
      </Animateonenterview> 
    </div>
</Section> -->
<!-- 
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
</Hero> -->

<!-- <Section id="about">
  <Hero className="py-16 md:py-36 overflow-hidden">
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
</Section> -->
<!-- 
<Section color="neutral-light" id="contact" noContain fullHeight bg="assets/bg/3.JPG" className="relative">
  <div class="bg-neutral-light w-full md:w-1/2 absolute bottom-0 md:right-0 h-[50vh] md:h-screen flex flex-col items-center justify-center">
    <h2 class="text-center text-neutral-dark pb-6 md:pb-16 whitespace-nowrap">Contact us</h2>
    <div class="flex flex-col">
      <Card className="bg-neutral-light ring-primary ring-2 max-w-fit rounded-[220px] my-2">
          <div class="w-[90%] py-3 mx-auto flex flex-col items-center space-y-4 px-12">
            <Copyable value="info@skyfortc.com" className="flex items-center w-full cursor-pointer hover:scale-105 transition duration-300">
              <EmailAttachment className="text-primary w-8 mx-1" />
              <p>info@skyfortc.com</p>
            </Copyable>
            <Go to="tel:+201033923229" className="flex items-center w-full cursor-pointer hover:scale-105 transition duration-300">
              <Phone className="text-primary w-8 mx-1" />
              <p>01033923229</p>
            </Go>
          </div>
      </Card>
      <TextInput bind:this={emailInput} bind:value={emailCollect.value} {...emailCollect} on:submit={mail} on:change={() => emailInput.cta.label = 'send'} />
      <p class="w-64 text-center mx-auto">and we'll send you a message!</p>
    </div>
  </div>
</Section>
   -->