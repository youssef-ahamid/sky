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

    // Data Handling & Stores
    import { activePage } from '$lib/stores'
import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
    $activePage = 'projects'

    console.log(project)
  </script>
  
  <Hero fullHeight {project} {path} />

  <div class="project-content">
    <Animateonenterview>
      <h2 class="my-4">Scope of Work</h2>
      {@html project.scope.html}
    </Animateonenterview>
  </div>

  <!-- <Seo {...page.seo} /> -->
  
  

    
<!-- 
  <Filterable
    selected="All"
    items={projects}
    component={Project}
    matchingKey="services"
    matchInArray
    secondaryMatchingKey="shortTitle"
    title="Browse Projects"
  />
  
  <Testimonial {...page.sections[1]} />
  
  <Contact {...page.sections[2]} /> -->