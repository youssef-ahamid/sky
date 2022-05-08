<script context="module">
  import { getServices, getPage } from '$lib/gql'

  export async function load({ url }) {
    let page = await getPage(url.pathname.substring(1))
    let services = await getServices()

    return {
      props: {
        path: url.pathname,
        page,
        services,
      },
    }
  }
</script>

<script>
  import Hero from '$lib/sections/Hero.svelte'
  import Seo from '$lib/components/SEO/SEO.svelte'
  
  import { activePage } from '$lib/stores';

  export let services, page, path
  
  $activePage = 'services'
</script>

<Seo {...page.seo} />

<Hero {...page.sections[0]} {path} />
