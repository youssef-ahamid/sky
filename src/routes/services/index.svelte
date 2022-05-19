<script context="module">
  import { getServices, getPage } from '$lib/gql'

  export async function load({ url }) {
    let page = await getPage('services')
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

  import Process from '$lib/sections/Process.svelte'
  import Services from '$lib/sections/Services.svelte'

  import { activePageSlug } from '$lib/stores'
  $activePageSlug = 'services'
</script>

<Hero {...page.sections[0]} {path} />
<Process {...page.sections[1]} />
<Services {services} />
