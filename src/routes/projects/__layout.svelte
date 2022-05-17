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

  import { activePageSlug } from '$lib/stores'

  export let page

  $activePageSlug = 'projects'
</script>

<slot />
<Contact {...page.sections[3]} />
