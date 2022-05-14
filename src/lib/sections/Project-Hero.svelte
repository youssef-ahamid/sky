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
  import Establishment from '$lib/icons/establishment.svelte'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'
</script>

<Section
  color="neutral-light"
  {fullHeight}
  bg={background.url}
  noContain
>
  <Hero fullHeight className="text-secondary">
    <div slot="left" class="flex flex-col items-start space-y-2">
      <Animateonenterview className="text-primary">
        <Breadcrumb {path} />
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="200">
        <h1>{project.title}</h1>
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="500" className="flex flex-wrap items-center">
        {#each project.clients as client}
          {#if !!client.logo && !!client.logo.url }
            <Image {...client.logo} type="logo" className="mr-2" />
          {/if}
        {/each}
      </Animateonenterview>
      <div
        class="grid gri-cols-1 sm:gap-x-12 gap-y-4 sm:grid-cols-2 w-full"
      >
        <Animateonenterview
          type="flyUp"
          delay="800"
          className="flex items-center"
        >
          <Earth className="h-6 w-6 mr-2 text-primary" />
          <p class="one-liner">{project.location}</p>
        </Animateonenterview>
        <Animateonenterview
          type="flyUp"
          delay="900"
          className="flex items-center"
        >
          <Usd className="h-6 w-6 mr-2 text-primary" />
          <p class="one-liner">{project.businessVolume}</p>
        </Animateonenterview>
        <Animateonenterview
          type="flyUp"
          delay="1000"
          className="flex items-center"
        >
          <Establishment className="h-6 w-6 mr-2 text-primary" />
          <p class="one-liner">{project.owner}</p>
        </Animateonenterview>
      </div>
      <Animateonenterview type="flyLeft" delay="800">
        <slot />
      </Animateonenterview>
    </div>
    <div slot="right">
      <Animateonenterview type="flyRight" delay="1500">
        <Image
          src={project.image.url}
          type="custom"
          clip={Triangles}
        />
      </Animateonenterview>
    </div>
  </Hero>
</Section>
