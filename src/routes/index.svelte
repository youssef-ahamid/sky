<script>
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'

  import { slugify } from '$lib/helpers'
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

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
      description: 'khod ahla description 3ala dmaghak khod ahla description 3ala dmaghakkhod ahla description 3ala dmaghak',
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
      description: 'khod ahla description 3ala dmaghak khod ahla description 3ala dmaghak khod ahla description 3ala dmaghak',
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
      description: 'khod ahla description 3ala dmaghak khod ahla description 3ala dmaghakkhod ahla description 3ala dmaghak',
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
  let activeFeatures = Array.from(
    { length: features.length },
    _ => false
  )
  const activate = i => {
    if (!activeFeatures[i]) {
      activeFeatures = activeFeatures.map(_ => false)
      activeFeatures[i] = true
    } else activeFeatures = activeFeatures.map(_ => false)
  }
</script>

<Section id="projects" className="bg-secondary overflow-hidden pb-48">
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
  <List
    items={features}
    let:prop={feature}
    let:index
    className="flex justify-center md:justify-between flex-wrap mx-1"
  >
  <Animateonenterview type={index%2===0? "flyLeft":"flyRight"} className="overflow-visible">
    <Feature
      on:click={() => {
        activate(index)
      }}
      {...feature}
      bind:active={activeFeatures[index]}
      className=""
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
      <Go to="/projects/{slugify(feature.title)}" >
        <Button
          label="more"
          className="hover:bg-secondary hover:text-neutral-light text-secondary bg-neutral-light"
        />
      </Go>
    </div>
    </Feature>
  </Animateonenterview>
  </List>
</Section>
