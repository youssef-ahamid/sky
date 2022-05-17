<script>
  import Section from '$lib/sections/Section.svelte'
  import Hero from '$lib/sections/Hero.svelte'
  import { activePage, path } from '$lib/stores'

  let story

  let page = $activePage
  console.log(page.sections[1])
</script>

<Hero {...page.sections[0]} path={$path} color="secondary" />

<Section {...page.sections[1]} let:get bind:this={story} className="mx-auto max-w-6xl pb-12">
  {@html get('WYSIWYG').text.html}
</Section>
