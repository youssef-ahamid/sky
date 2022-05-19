<svelte:options accessors={true} />

<script>
  import Section from '$lib/sections/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  export let story
  export let section
</script>

<Section
  {...section}
  let:get
  bind:this={story}
  className="mx-auto max-w-6xl pb-12"
>
  <Animateonenterview
    type="flyLeft"
    delay="1200"
    className="richtext"
  >
    {@html get('WYSIWYG').text.html}
  </Animateonenterview>
</Section>
