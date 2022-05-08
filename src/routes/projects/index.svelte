<script context="module">
  import { getProjectPreviews, getPage } from '$lib/gql'

  export async function load({ url }) {
    let page = await getPage(url.pathname.substring(1))
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
  import Filterable from '$lib/sections/Filterable.svelte'
  
  // Components
  import Project from '$lib/components/Project/Project.svelte';
  import Seo from '$lib/components/SEO/SEO.svelte'
  
  // Data Handling & Stores
  import { activePage } from '$lib/stores'
  $activePage = 'projects'
</script>

<Seo {...page.seo} />

<Hero {...page.sections[0]} {path} />

<Filterable
  selected="All"
  items={projects}
  component={Project}
  matchingKey="services"
  matchInArray
  secondaryMatchingKey="shortTitle"
  title="Browse Projects"
/>
