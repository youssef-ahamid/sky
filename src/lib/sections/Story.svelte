<svelte:options accessors={true} />

<script>
  import Section from '$lib/sections/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Geometry from '$lib/icons/geometry/Triangles.svelte'

  export let story
  export let section
</script>

<div class="relative">
  {#each ['', '', '', ''] as _, i}
    <div
      class="absolute w-8 md:w-12 text-primary {i % 2 === 0
        ? 'left-0 md:-left-2'
        : 'right-0 md:-right-2 -scale-x-100'}"
      style="top: {10 + 25 * i}rem"
    >
      <Geometry active />
    </div>
  {/each}

  <Section
    {...section}
    let:get
    bind:this={story}
    className="mx-auto max-w-6xl pb-12"
  >
    <Animateonenterview
      type="flyLeft"
      delay="1200"
      className="richtext story"
    >
      {@html get('WYSIWYG').text.html}
    </Animateonenterview>
  </Section>
</div>
