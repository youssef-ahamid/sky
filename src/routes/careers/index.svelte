<script>
  // Props

  // Sections
  import Hero from '$lib/sections/Hero.svelte'
  import Quote from '$lib/sections/Quote.svelte'

  // Data Handling & Stores
  import { activePage, path } from '$lib/stores'
  let sections = $activePage.sections
</script>

<Hero {...sections[0]} path={$path} />
<Quote data={sections[1]} />
