<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  export let className = ''
  export let content
</script>

<div class={className}>
  <Animateonenterview>
    {@html content}
  </Animateonenterview>
  <Animateonenterview>
    <slot />
  </Animateonenterview>
</div>
