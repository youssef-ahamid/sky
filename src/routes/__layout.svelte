<script>
  import Nav from '$lib/components/Nav/Nav.svelte'

  import { activeSection } from '$lib/stores'

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

  import '$lib/styles/app.css'
</script>

<Nav
  {links}
  styleOptions={{
    type:
      $activeSection.color == 'secondary' ? 'primary' : 'secondary',
  }}
/>
<slot />
