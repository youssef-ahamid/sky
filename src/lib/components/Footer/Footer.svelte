<script>
  /* props */
  export let links = []
  export let address = {}
  export let content = ""
  export let copyright =
    'Copyright forever and ever by Samurai Software House'
  export let className = '' // *, custom wrapper classes

  import Section from '$lib/components/Section/Section.svelte'
  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Go from '$lib/components/Go/Go.svelte'
 
  /* styles */
  import { config } from './styles'
import Copyable from '../Copyable/Copyable.svelte'
import Image from '../Image/Image.svelte'
  $: classes = config()
</script>

<Section id="footer" noContain className="bg-neutral">
  <footer class={`${classes.footer} ${className}`}>
    <nav class={classes.links}>
      <div>
        <Go to="/" className={classes.logoWrapper}>
          <Image src="https://i.ibb.co/h261LhZ/sky-logo.png" class={classes.logo} alt="Sky Fort for Trading and Contracting logo"/>
        </Go>
        <p class="body-sm px-2">some text for the logo can go in here for real</p>
      </div>
      <List items={links} let:prop={link} className={classes.list}>
        <NavLink {...link} className={classes.link} />
      </List>
      <div class="flex flex-wrap">
        <div class="mx-3 my-2">
          <p class="font-bold body-sm">Email</p>
          <Copyable val={address.email}>
            <p class="body-sm">{address.email}</p>
          </Copyable>
        </div>
        <div class="mx-3 my-2">
          <p class="font-bold body-sm">Phone</p>
          <Go to="tel:{address.phone}">
            <p class="body-sm">{address.phone}</p>
          </Go>
        </div>
        <div class="mx-3 my-2">
          <p class="font-bold body-sm">Address</p>
          <p class="body-sm whitespace-pre-line">
            {address.fullAddress}
          </p>
        </div>
      </div>
    </nav>
    <div class={classes.copyright}>{copyright}</div>
  </footer>
</Section>
