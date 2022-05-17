<script context="module">
  import { getProject } from '$lib/gql'

  export async function load({ url, params }) {
    let project = await getProject(params.slug)

    return {
      props: {
        path: url.pathname,
        project,
      },
    }
  }
</script>

<script>
  // Props
  export let project, path

  // Sections
  import Hero from '$lib/sections/Project-Hero.svelte'

  // Components
  import PageTransition from '$lib/components/Page Transition/Page Transition.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Carrousel from '$lib/components/Carrousel/Carrousel.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import { fly } from 'svelte/transition'

  // Data Handling & Stores
  let trans = 400
  import { activePageSlug } from '$lib/stores'
  $activePageSlug = 'projects'
</script>

<PageTransition>
  {project.title}
</PageTransition>

<Hero fullHeight {project} {path} />

<div class="bg-neutral pt-12 md:pt-20">
  <div class="project-content">
    <Animateonenterview>
      <h2 class="my-4">Scope of Work</h2>
      {@html project.scope.html}
    </Animateonenterview>
  </div>
  {#if project.images.length > 0}
    <Carrousel
      items={project.images}
      loop
      let:item={image}
      let:previewed
      className="min-h-[200px] md:min-h-[650px] bg-neutral mt-6"
      numPreviewedEachStep={1}
      on:next={(trans = -400)}
      on:prev={(trans = 400)}
    >
      {#if previewed}
        {#key image.url}
          <div
            in:fly={{ x: trans, delay: 400 }}
            out:fly={{ x: -trans, duration: 300 }}
            class:absolute={!previewed}
          >
            <Image
              {...image}
              alt={`${project.title} - Sky for Trading & Contracting`}
              className="min-h-[600px]"
              type="bottom-cover"
            />
          </div>
        {/key}
      {/if}
    </Carrousel>
  {/if}
</div>
