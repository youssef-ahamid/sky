<script>
  import Burger from '$lib/icons/burger.svelte'
  /* props */
  export let links = [] // *, list items
  export let activeLink
  export let activeSub = 0
  export let icon = Burger
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  if (!styleOptions.type) styleOptions.type = 'neutral-light'

  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'

  import { clickOutside } from '$lib/actions'

  let active = false
  const toggle = () => (active = !active)

  /* styles */
  import { config } from './styles'
  import Go from '../Go/Go.svelte'
  import Image from '../Image/Image.svelte'
  import { activePageSlug } from '$lib/stores'
  import Logo from '../Logo/Logo.svelte'
  $: classes = config({ active, ...styleOptions })
</script>

<div class="relative h-8 -mt-8 pt-8">
  <Go to="/">
    <Logo
      color={styleOptions.type == 'secondary'
        ? 'primary'
        : 'neutral-light'}
      className="absolute left-[10%] lg:hidden w-24 top-20 lg:w-44 z-[997]"
    />
  </Go>
  <div class={classes.iconWrapper} on:click={toggle} id="menu-icon">
    <svelte:component this={icon} className={classes.icon} {active} />
  </div>
  <nav class={`${classes.nav} ${className}`}>
    <Go to="/">
      <Logo
        color={styleOptions.type == 'secondary'
          ? 'primary'
          : 'neutral-light'}
        className="my-8 lg:my-0 w-20 lg:w-32 pt-5 left-5 lg:fixed lg:top-4 lg:left-[5%]"
      />
    </Go>
    <List items={links} let:prop={item} className={classes.links}>
      <NavLink
        {...item}
        active={$activePageSlug == item.text.toLowerCase()}
        {activeSub}
        on:click={() => {
          activeLink = links.indexOf(item)
          active = false
        }}
        className={classes.link}
        styleOptions={{ type: 'primary' }}
      />
    </List>
  </nav>
</div>
