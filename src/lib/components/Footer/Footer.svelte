<script>
  /* props */
  export let links = []
  export let copyright =
    'Copyright forever and ever by Samurai Software House'
  export let className = '' // *, custom wrapper classes

  import Section from '$lib/components/Section/Section.svelte'
  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Go from '$lib/components/Go/Go.svelte'
 
  /* styles */
  import { config } from './styles'
  $: classes = config()
</script>

<Section id="footer" noContain>
  <footer class={`${classes.footer} ${className}`}>
    <nav class={classes.links}>
      <div>
        <Go to="/" className={classes.logoWrapper}>
          <img src="images/logo.ong" class={classes.logo} alt="logo"/>
        </Go>
        <slot name="logoText" />
      </div>
      <List items={links} let:prop={link} className={classes.list}>
        <NavLink {...link} className={classes.link} />
      </List>
      <slot />
    </nav>
    <div class={classes.copyright}>{copyright}</div>
  </footer>
</Section>
