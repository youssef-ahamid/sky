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
  import Hero from '$lib/sections/Hero.svelte'
  import Seo from '$lib/components/SEO/SEO.svelte'
  import { activePage } from '$lib/stores'
  import Filterable from '$lib/sections/Filterable.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte';

  export let projects, page, path

  let filters = [
    'all',
    'mep',
    'infrastructure',
    'finishing',
    'turnkey',
  ]
  $activePage = 'projects'
</script>

<Seo {...page.seo} />

<Hero {...page.sections[0]} {path} />

<Filterable
  selected="All"
  items={projects}
  component={Feature}
  matchingKey="services"
  matchInArray
  secondaryMatchingKey="shortTitle"
  {filters}
  title="Browse Projects"
/>
