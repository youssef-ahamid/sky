<script>
  /* props */
  export let items = [] // *, list items
  export let className = '' // *, custom wrapper classes
  export let styles = ''

  /* styles */
  import { config } from './styles'
  let classes = config()
</script>

<ul
  class={`${classes.list} + ${className}`}
  style={styles}
  on:scroll
>
  {#each items as item, i}
    <li class={classes.listItem}>
      <slot prop={item} index={i} />
    </li>
  {/each}
</ul>
