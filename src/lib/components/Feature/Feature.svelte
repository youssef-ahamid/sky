<script>
  import Image from '$lib/components/Image/Image.svelte'

  /* props */
  export let title = ''
  export let images = []
  export let reverse = false // *, true
  export let active = false // *, true
  export let image = {}
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ reverse, active })
</script>

<div class={`${classes.feature} ${className}`}>
  {#if !!image.src}
    <div class={classes.left}>
      <Image {...image} className={classes.image} />
    </div>
  {/if}
  <div class={classes.right} on:click>
    {#if images.length > 0}
      <div>
        {#each images as img}
          <Image {...img} className={classes.otherImage} />
        {/each}
      </div>
    {/if}
    <slot />
    <div class={classes.content}>
      <h4 class={classes.title}>{title}</h4>
      <div class={classes.description}>
        <slot name="description" />
      </div>
      <div class={classes.cta}><slot name="cta" /></div>
    </div>
  </div>
</div>
