<script>
  import Section from '$lib/sections/Section.svelte'
  import List from '$lib/components/List/List.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import { mobile } from '$lib/stores'
  import Geometry from '$lib/icons/geometry/Triangles.svelte'
  export let data = {}
  let projects = data.content[0].projects
</script>

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

  <Section
    color="secondary"
    id="projects"
    className="overflow-hidden pb-12 md:pb-32"
    {...data}
  >
    <List
      items={projects}
      let:prop={project}
      let:index
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto relative justify-center md:justify-between"
    >
      <Go to="/projects/{project.slug}">
        <Animateonenterview
          type={index % 2 === 0 ? 'flyLeft' : 'flyRight'}
          className="overflow-visible relative w-full h-full"
        >
          <Feature {...project} active={$mobile}>
            <p slot="description" class="font-normal line-clamp-3">
              {project.description}
            </p>
            <Triangles />
            <div slot="cta">
              <Go
                to="/projects/{project.slug}"
                className="w-full flex justify-end"
              >
                <Button
                  type="ghost"
                  icon="chevron_right"
                  className="translate-x-6"
                />
              </Go>
            </div>
          </Feature>
        </Animateonenterview>
      </Go>
    </List>
  </Section>
</div>
