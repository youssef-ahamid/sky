<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import List from '$lib/components/List/List.svelte'
  import Project from '$lib/components/Project/Project.svelte'

  import Section from '$lib/components/Section/Section.svelte'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'

  export let services = []
</script>

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
