<script>
  import Burger from '$lib/icons/burger.svelte'
  /* props */
  export let links = [] // *, list items
  export let activeLink
  export let activeSub = 0
  export let icon = Burger
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'

  import { clickOutside } from '$lib/actions'

  let active = false
  const toggle = () => (active = !active)

  /* styles */
  import { config } from './styles'
  import Go from '../Go/Go.svelte'
  import Image from '../Image/Image.svelte'
  import { activePage } from '$lib/stores'
  $: classes = config({ active, ...styleOptions })
</script>

<div class="absolute top-0 left-0 right-0">
  <Go to="/">
    <Image
      src="https://i.ibb.co/h261LhZ/sky-logo.png"
      alt="Sky Fort for Trading and Contracting logo"
      className="absolute left-[10%] lg:hidden top-10 w-24 lg:w-36 z-[997]"
    />
  </Go>
  <div class={classes.iconWrapper} on:click={toggle} id="menu-icon">
    <svelte:component this={icon} className={classes.icon} {active} />
  </div>
  <nav class={`${classes.nav} ${className}`}>
    <Go to="/">
      <Image
        src="https://i.ibb.co/h261LhZ/sky-logo.png"
        alt="Sky Fort for Trading and Contracting logo"
        className="my-8 lg:my-0 w-20 lg:w-32 pt-5 lg:fixed lg:top-5 lg:left-[10%]"
      />
    </Go>
    <List items={links} let:prop={item} className={classes.links}>
      <NavLink
        {...item}
        active={$activePage == item.text.toLowerCase()}
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
