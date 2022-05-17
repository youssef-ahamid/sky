<script>
  export let fullHeight = false
  export let background = {}
  export let path = '/'
  export let project = {}

  import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import Earth from '$lib/icons/Earth.svelte'
  import Usd from '$lib/icons/usd.svelte'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'
  import List from '$lib/components/List/List.svelte'
</script>

<Section
  color="neutral-light"
  {fullHeight}
  bg={background.url}
  noContain
>
  <Hero fullHeight className="text-secondary items-start pt-24">
    <div slot="left" class="flex flex-col items-start space-y-2">
      <Animateonenterview className="text-primary">
        <Breadcrumb {path} />
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="200">
        <h1>{project.title}</h1>
      </Animateonenterview>
      <div
        class="grid gri-cols-1 sm:gap-x-12 gap-y-4 sm:grid-cols-2 w-full"
      >
        <Animateonenterview
          type="flyUp"
          delay="800"
          className="flex items-start"
        >
          <Earth className="h-6 w-6 mr-2 mt-0.5 text-primary" />
          <p>{project.location}</p>
        </Animateonenterview>
        <Animateonenterview
          type="flyUp"
          delay="900"
          className="flex items-start"
        >
          <Usd className="h-6 w-6 mr-2 mt-0.5 text-primary" />
          <p class="one-liner">{project.businessVolume}</p>
        </Animateonenterview>
      </div>
      <Animateonenterview type="flyLeft" delay="1000">
        <h3 class="text-primary opacity-75 mt-4">Owner</h3>
        <p class="one-liner">{project.owner}</p>
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="1500">
        <h3 class="text-primary opacity-75 mt-4">Consultants</h3>
        <List
          items={project.clients}
          let:prop={client}
          let:index
          className="flex flex-wrap items-center"
        >
          {#if !!client.logo && !!client.logo.url}
            <Animateonenterview
              delay={1800 + index * 100}
              type="flyUp"
            >
              <Image {...client.logo} type="logo" className="mr-10" />
            </Animateonenterview>
          {/if}
        </List>
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="800">
        <slot />
      </Animateonenterview>
    </div>
    <div slot="right">
      {#if !!project.image}
        <Animateonenterview type="flyRight" delay="1500">
          <Image
            src={project.image.url}
            type="custom"
            clip={Triangles}
          />
        </Animateonenterview>
      {/if}
    </div>
  </Hero>
</Section>
