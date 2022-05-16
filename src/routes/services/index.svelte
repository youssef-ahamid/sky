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
  export let services, page, path
  
  import Hero from '$lib/sections/Hero.svelte'
  import Seo from '$lib/components/SEO/SEO.svelte'

  import Process from '$lib/sections/Process.svelte'
  import Services from '$lib/sections/Services.svelte'
  import Contact from '$lib/sections/Contact.svelte'
  
  import { activePage } from '$lib/stores'
  $activePage = 'services'
</script>

<Seo {...page.seo} />
<Hero {...page.sections[0]} {path} />
<Process {...page.sections[1]} />
<Services {services} />
<Contact {...page.sections[2]} />
