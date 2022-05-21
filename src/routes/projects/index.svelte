<script context="module">
  import { getProjectPreviews, getPage } from '$lib/gql'

  export async function load({ url }) {
    let page = await getPage('projects')
    let projects = await getProjectPreviews()

    return {
      props: {
        path: url.pathname,
        page,
        projects,
      },
    }
  }
</script>

<script>
  // Props
  export let projects, page, path

  // Sections
  import Hero from '$lib/sections/Hero.svelte'
  import Testimonial from '$lib/sections/Testimonial.svelte'

  // Components
  import Project from '$lib/components/Project/Project.svelte'
  import List from '$lib/components/List/List.svelte'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import Geometry from '$lib/icons/geometry/Triangles.svelte'

  // Data Handling & Stores
  import { activePageSlug } from '$lib/stores'
  $activePageSlug = 'projects'
</script>

<Hero {...page.sections[0]} {path} />
<div class="relative">
  {#each projects as project, i}
    <div
      class="absolute w-8 md:w-12 text-primary {i % 2 === 0
        ? 'left-0 md:-left-2'
        : 'right-0 md:-right-2 -scale-x-100'}"
      style="top: {10 + 25 * i}rem"
    >
      <Geometry active />
    </div>
  {/each}
  <Section id="projects">
    <List items={projects} let:prop={project} let:index>
      <Animateonenterview
        type={index % 2 === 0 ? 'flyLeft' : 'flyRight'}
        delay={100 * (index % 3)}
      >
        <Project
          {...project}
          additionalImageData={{ type: 'custom', clip: Triangles }}
          reverse={index % 2 === 1}
          cta={{
            link: `/projects/${project.slug}`,
            label: 'read more',
            icon: 'chevron_right',
            shape: 'ghost',
          }}
          shortAndSweet
        />
      </Animateonenterview>
    </List>
  </Section>
</div>

<Testimonial {...page.sections[1]} />
