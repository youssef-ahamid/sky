<script>
  import Image from '$lib/components/Image/Image.svelte'

  /* props */
  export let title = ''
  export let images = []
  export let reverse = false // *, true
  export let active = false // *, true
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ reverse, active })
</script>

<button class={`${classes.feature} ${className}`} on:focus on:click on:blur>
  {#if images.length > 0}
    <div class={classes.left}>
      <Image {...images[0]} className={classes.image} />
      {#each images as img, i}
        {#if i > 0}
          <Image {...img} className={classes.otherImage} />
        {/if}
      {/each}
    </div>
  {/if}
  <div class={classes.right} on:click>
    <slot />
    <div class={classes.content}>
      <h4 class={classes.title}>{title}</h4>
      <div class={classes.description}>
        <slot name="description" />
      </div>
      <div class={classes.cta}><slot name="cta" /></div>
    </div>
  </div>
</button>
