<script context="module">
  export const prerender = true
  import { getPage } from '$lib/gql'

  export async function load() {
    let page = await getPage('projects')

    return {
      props: {
        page,
      },
    }
  }
</script>

<script>
  import Contact from '$lib/sections/Contact.svelte'
  import Seo from '$lib/components/SEO/SEO.svelte'

  import { activePage } from '$lib/stores'

  export let page

  $activePage = 'projects'
</script>


<Seo {...page.seo} />
<slot />
<Contact {...page.sections[3]} />
