<script>
  import Nav from '$lib/components/Nav/Nav.svelte'

  import { activeSection, mobile } from '$lib/stores'

  let links = [
    {
      to: '/projects',
      text: 'Projects',
    },
    {
      to: '/services',
      text: 'Services',
    },
    {
      to: '/about',
      text: 'About us',
    },
    {
      to: '/careers',
      text: 'Careers',
    },
    {
      to: '/ac-units',
      text: 'AC Units',
    },
    {
      to: 'Sky_Company_Portfolio.pdf',
      text: 'Company profile',
      download: 'SKY for Trading & Contracting - Company Profile',
    },
  ]

  let innerWidth

  $: $mobile = innerWidth < 700
  import '$lib/styles/app.css'
</script>

<svelte:window bind:innerWidth />

<Nav
  {links}
  styleOptions={{
    type:
      $activeSection.color == 'secondary' ? 'primary' : 'secondary',
  }}
/>
<slot />
