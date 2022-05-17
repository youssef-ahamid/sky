<script>
  import Awards from '$lib/sections/Awards.svelte'
import Hero from '$lib/sections/Hero.svelte'
  import Story from '$lib/sections/Story.svelte'
  
  import { activePage, path } from '$lib/stores'
  let page = $activePage

</script>

<Hero {...page.sections[0]} path={$path} color="secondary" />
<Story section={page.sections[1]} />
<Awards section={page.sections[2]} />