<script>
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Nav from '$lib/components/Nav/Nav.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Go from '$lib/components/Go/Go.svelte'

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

  let active = false
  const toggleActive = () => {
    active = !active
  }
</script>

<h1>heyeyey</h1>
<h2>heyeye</h2>
<h3>hehehyeye</h3>
<h4>heyeyye</h4>
<h5>ehyehye</h5>
<h6>heyheyheyh</h6>
<p>heyeheyeh</p>
<p class="body-lg">hamada</p>
<Hero fullHeight>
  <NavLink
    text="Hamasa"
    to="ahmad"
    styleOptions={{ type: 'primary' }}
  />
</Hero>
<Hero fullHeight className="bg-secondary">
  <Nav {links} activeLink={0} activeSub={0} />

  <div class="mx-3">
    <Feature
      on:click={toggleActive}
      title="il-monte galala"
      image={{
        src: 'https://www.b2b-egy.com/backend/media/projects/39/2019/original.jpg',
      }}
      images={[
        {
          src: 'https://th.bing.com/th/id/OIP.7kpLArQjJSADTpMpLb6YkAHaE_?pid=ImgDet&rs=1',
        },
      ]}
      bind:active
    >
      <p slot="description">khod description</p>

      <div
        class:-translate-x-44={active}
        class="transition duration-700 w-[50%] md:w-[40%] inset-0 absolute  overflow-hidden"
      >
        <div
          class=" h-96  bg-neutral-light rotate-[50deg] transform origin-top-right"
        />
      </div>

      <Go to="/projects/hamada" slot="cta">
        <Button
          label="more"
          className="hover:bg-secondary hover:text-neutral-light text-secondary bg-neutral-light"
        />
      </Go>
    </Feature>
  </div>
</Hero>
