<script context="module">
  export const prerender = true
  import { getPage } from '$lib/gql'

  export async function load() {
    let page = await getPage('projects')

    return {
      props: {
        page,
      },
    }
  }
</script>

<script>
  import Footer from '$lib/components/Footer/Footer.svelte'
  import Nav from '$lib/components/Nav/Nav.svelte'
  import Contact from '$lib/sections/Contact.svelte'
  import Seo from '$lib/components/SEO/SEO.svelte'

  import { activeSection, mobile, activePage } from '$lib/stores'

  export let page

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
  $activePage = 'projects'

  import '$lib/styles/app.css'
</script>

<svelte:window bind:innerWidth />

<Seo {...page.seo} />

<slot />

<Contact {...page.sections[2]} />
