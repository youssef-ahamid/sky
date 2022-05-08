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
import { activePage } from '$lib/stores';
  $: classes = config({ active, ...styleOptions })
</script> 


<div>
  <Go to="/">
    <Image src="https://i.ibb.co/h261LhZ/sky-logo.png" alt="Sky Fort for Trading and Contracting logo" className="absolute left-[10%] md:hidden top-10 w-24 md:w-36 z-[997]" />
  </Go>
  <div class={classes.iconWrapper} on:click={toggle} id="menu-icon">
    <svelte:component this={icon} className={classes.icon} {active} />
  </div>
  <nav class={`${classes.nav} ${className}`}>
    <Go to="/">
      <Image src="https://i.ibb.co/h261LhZ/sky-logo.png" alt="Sky Fort for Trading and Contracting logo" className="my-8 md:my-0 w-20 pt-5 md:fixed md:top-5 md:left-[10%]" />
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
        styleOptions={{ type: "primary" }}
      />
    </List>
  </nav>
</div>
