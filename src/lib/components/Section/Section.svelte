<script>
  export let className = ''
  export let title = ''
  export let id = title
  export let cta = null
  export let bg = ''
  export let gradient = ''
  export let noContain = false
  export let fullHeight = false

  import Title from '$lib/components/Title/Title.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Button from '$lib/components/Button/Button.svelte'

  /* styles */
  import { config } from './styles'
  $: classes = config({ noContain, fullHeight })
</script>

<section class={`${classes.section} ${className}`} {id} style="{`background-image: ${gradient? `${gradient},`: ''} url(${bg});`}">
  <Title line={title.length > 0}>{title}</Title>
  <div class={classes.content}>
    <slot />
    {#if cta}
      <div class={classes.ctaContainer}>
        <Go to={cta.link}>
          <Button
            label={cta.label}
            type={cta.type}
            shape={cta.shape}
            icon={cta.icon}
            reverse={cta.reverse}
            className={cta.className}
          />
        </Go>
      </div>
    {/if}
  </div>
</section>
