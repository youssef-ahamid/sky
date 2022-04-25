<script>
	import Copyable from './../lib/components/Copy/Copyable.svelte';
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import Form from '$lib/components/Form/Form.svelte';

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
          src: 'https://i.ibb.co/7NLx6bW/image001-6-10.jpg',
        },
        {
          src: 'https://i.ibb.co/0MKRvpv/Untitled-1-1024x577.jpg',
        },
      ],
      description:
        'Solorerferum ipit omnis earibus cipiciae volestia ipid mo occus doluptin experum quae que nosanim doles',
    },
    {
      title: 'fouka bay',
      images: [
        {
          src: 'https://i.ibb.co/x3xwxsZ/015.jpg',
        },
        {
          src: 'https://i.ibb.co/qsqKMJv/the-house-fouka-bay-4.jpg',
        },
      ],
      description:
        'Solorerferum ipit omnis earibus cipiciae volestia ipid mo occus doluptin experum quae que nosanim doles',
    },
    
  ]

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
  const links = [
    {
      to: '/projects',
    text: 'projects',
    },
    {
      to: '/services',
      text: 'services',
    },
    {
      to: '/about us',
      text: 'about us',
    },
    {
      to: '/careers',
      text: 'careers',
    },
  ]

  import TextInput from '$lib/components/Text Input/Text Input.svelte'
import Card from '$lib/components/Card/Card.svelte';

 const contact = {
  inputs: [
    {
      component: TextInput,
      data: {
        label: 'name',
        className: 'md:w-[45%]',
        value: '',
        validations: [{ type: 'required', error: 'required' }],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'email',
        className: 'md:w-[45%]',
        value: '',
        validations: [
          { type: 'required', error: 'required' },
          { type: 'email', error: 'invalid email' },
        ],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'phone',
        className: 'md:w-[45%]',
        value: '',
        validations: [{ type: 'required', error: 'required' }],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'company',
        className: 'md:w-[45%]',
        value: '',
      },
    },
    {
      component: TextInput,
      data: {
        label: 'message',
        className: 'w-full',
        value: '',
        validations: [{ type: 'required', error: 'required field' }],
        type: 'text area',
      },
    },
  ],
  button: {
    label: 'send message',
    shape: 'round',
    type: 'primary',
  },
}

  let overlay = null

  const overlayProjects = i => {
    overlay = i
  }
  const unOverlayProjects = () => {
    overlay = null
  }
  let Y, height
</script>

<svelte:window bind:scrollY={Y} bind:innerHeight={height} />

<Nav {links} styleOptions={{ type: 'primary' }}/>

<Section id="home" className="bg-secondary relative bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/44HfwBV/IL-Monte-Galala-Real-View.jpg')]">
  <div class="absolute left-[3%] md:left-[6%] bottom-0 top-0 w-1 md:w-2 rounded-full bg-neutral-light bg-opacity-30 scale-y-150 origin-top"></div>
  <div class="absolute left-[3%] md:left-[6%] bottom-0 top-0 w-1 md:w-2 rounded-full bg-neutral-light bg-opacity-100 origin-top z-10" style="transform: scaleY({((Y*1.9/height)*100)}%)"></div>
  <Hero fullHeight className="relative">
    <div class="flex-col text-neutral-light">
      <p class="text-lg md:text-3xl font-extralight">SKY for Trading and Contracting</p>  
      <h1 class="py-2 md:py-4 font-bold -mt-2 md:-mt-4">You dream it, we <span class="bg-primary text-neutral-light">make</span> it</h1>
      <div class="flex py-12">
        <Go to="#contact">
          <Button type="primary" label="contact us" />
        </Go>
        <Button type="primary" label="more" className="mx-5" />
      </div>
    </div>
    </Hero>
</Section>

<Section id="trust" bg="https://i.ibb.co/7YBnMSw/HVAC-System-Office-Building.jpg" fullHeight>
  <Hero fullHeight className="items-end">
    <svelte:fragment slot="left">

      <Animateonenterview className="max-w-[90%] md:max-w-[80%] mx-auto absolute left-0 bottom-full">
        <h2 class="md:mx-3 py-6 whitespace-pre-line text-neutral-light">
          Trusted
          By
        </h2>
      </Animateonenterview>
    
      <List
        items={logos}
        let:prop={logo}
        className="py-6 justify-evenly grid grid-cols-3 gap-4"
      >
        <Animateonenterview>
          <Card>
          <Image {...logo} styleOptions={{ size: 'sm' }} />
        </Card>
        </Animateonenterview>
      </List>
    </svelte:fragment>

    <svelte:fragment slot="right">
      <List
        items={logos}
        let:prop={logo}
        className="py-6 justify-evenly grid grid-cols-3 gap-4"
      >
        <Animateonenterview>
          <Card>
          <Image {...logo} styleOptions={{ size: 'sm' }} />
        </Card>
        </Animateonenterview>
      </List>
    </svelte:fragment>
  </Hero>

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
    <div class="py-12 md:py-28 flex justify-center">
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
          <p slot="description" class="font-normal">{feature.description}</p>
          <div
            class="transition duration-700 w-[50%] group-focus-within:-translate-x-24 group-focus-within:md:-translate-x-44 md:w-[40%] inset-0 absolute  overflow-hidden"
          >
            <div
              class="h-96 bg-neutral-light rotate-[50deg] transform origin-top-right"
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

<Section id="services" className="overflow-visible">
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
</Section>
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

<Section id="about">
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
</Section>

<Section id="contact" noContain>
  <h2 class="text-center text-primary pb-6 md:pb-16">Contact us</h2>

  <div class="flex w-full flex-wrap md:flex-nowrap justify-around max-w-7xl mx-auto items-center" >
    <Animateonenterview type="flyLeft">
      <div class="flex-col w-full p-4 md:p-8">
        <Image src="http://images.dailyhive.com/20170201154612/kickstarter-new-york-brooklyn-office.jpg" alt="Sky For Trading and Contracting Office" className="w-full py-2" />
        <p class="max-w-[90%] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis a lacus mattis faucibus. Duis vel varius</p>
        <div class="flex w-48 justify-between py-6">
          <Go to="tel:+201200525233">
            <Button label="call" type="secondary" />
          </Go>
          <Copyable value="youssef@getbrewsy.com">
            <Button label="email"type="secondary" />
          </Copyable>
        </div>
      </div>
    </Animateonenterview>
    <Animateonenterview type="flyRight">
      <Form {...contact} className="md:p-10" />
    </Animateonenterview>

  </div>
</Section>
