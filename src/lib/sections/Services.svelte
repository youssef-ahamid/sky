<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import List from '$lib/components/List/List.svelte'
  import Project from '$lib/components/Project/Project.svelte'

  import Section from '$lib/components/Section/Section.svelte'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'
  import Geometry from '$lib/icons/geometry/Triangles.svelte'

  export let services = []
</script>

<div class="relative">
  {#each services as service, i}
    <div
      class="absolute w-8 md:w-12 text-primary {i % 2 === 0
        ? '-left-2'
        : '-right-2 -scale-x-100'}"
      style="top: {10 + 25 * i}rem"
    >
      <Geometry active />
    </div>
  {/each}
  <Section id="services">
    <List items={services} let:prop={service} let:index>
      <Animateonenterview
        type={index % 2 === 0 ? 'flyLeft' : 'flyRight'}
        delay={100 * (index % 3)}
      >
        <Project
          {...service}
          additionalImageData={{ type: 'custom' }}
          reverse={index % 2 === 1}
        />
      </Animateonenterview>
    </List>
  </Section>
</div>
