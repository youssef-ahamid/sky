<script>
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Nav from '$lib/components/Nav/Nav.svelte'
  const links = [
    {
      to: '/hamada',
      text: 'hamada',
    },
    {
      to: '/hamada',
      text: 'hamada',
    },
    {
      to: '/hamada',
      text: 'hamada',
    },
    {
      to: '/hamada',
      text: 'hamada',
    },
  ]
</script>

<Hero fullHeight>
  <NavLink
    text="Hamasa"
    to="ahmad"
    styleOptions={{ type: 'primary' }}
  />
</Hero>
<Hero fullHeight className="bg-secondary">
  <Button label="hamada" type="secondary" />
</Hero>
<Nav {links} activeLink={0} activeSub={0} />
