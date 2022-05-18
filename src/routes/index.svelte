<script>
  import Hero from '$lib/sections/Hero.svelte'
  import Trust from '$lib/sections/Trust.svelte'
  import Statistics from '$lib/sections/Statistics.svelte'
  import FeaturedProjects from '$lib/sections/Featured-Projects.svelte'
  import FeaturedServices from '$lib/sections/Featured-Services.svelte'

  import { activePage } from '$lib/stores'
  let sections = $activePage.sections
</script>

<Hero {...sections[0]} />
<Trust data={sections[1]} />
<Statistics {...sections[2]} />
<FeaturedProjects data={sections[3]} />
<FeaturedServices data={sections[4]} />
