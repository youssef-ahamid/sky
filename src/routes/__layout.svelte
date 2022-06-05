<svelte:options accessors={true} />

<script context="module">
  export const prerender = true
  import { getPage, getSection, graphcms } from '$lib/gql'

  export async function load({ url }) {
    let slug = url.pathname.substring(1)
    let contact = await getSection('contact')
    let footer = await getSection('footer')
    let page = await getPage(slug)

    return {
      props: {
        currentPath: url.pathname,
        page,
        slug,
        contact,
        footer,
      },
    }
  }
</script>

<script>
  export let page, slug, currentPath, contact, footer

  if (!page)
    page = {
      seo: {},
      sections: [],
    }

  import Seo from '$lib/components/SEO/SEO.svelte'

  import {
    activePageSlug,
    activeSection,
    mobile,
    activePage,
    path,
  } from '$lib/stores'
  $activePage = page
  $path = currentPath
  $activePageSlug = slug

  import Footer from '$lib/components/Footer/Footer.svelte'
  import Nav from '$lib/components/Nav/Nav.svelte'

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
      text: 'About',
    },
    {
      to: '/careers',
      text: 'Careers',
    },
    {
      text: 'Miraco Products',
      links: [
        {
          to: '/miraco-products/carrier',
          text: 'Carrier Products',
        },
        {
          to: '/miraco-products/refrigeration',
          text: 'Refrigeration Systems',
        },
      ],
    },
    {
      to: 'SkyCompanyPortfolio.pdf',
      text: 'Company profile',
      download: 'SKY for Trading & Contracting - Company Profile',
    },
  ]

  let innerWidth

  $: $mobile = innerWidth < 700
  import '$lib/styles/app.css'
  import Contact from '$lib/sections/Contact.svelte'
  import PageTransition from '$lib/components/Page Transition/Page Transition.svelte'
</script>

<svelte:window bind:innerWidth />

<PageTransition>
  {slug}
</PageTransition>

<Seo {...page.seo} />
<Nav
  {links}
  styleOptions={{
    type:
      $activeSection.color == 'secondary' ? 'primary' : 'secondary',
  }}
/>
<slot sections={page.sections} />
<Contact {...contact} />
<Footer
  {links}
  {...footer}
  copyright="copyright 2021 Sky for Trading & Contracting"
  address={{
    email: 'info@skyfortc.com',
    phone: '+1 (844) 789-8787',
    fullAddress:
      'Sky for Trading & Contracting, Inc.\n' +
      '1201 N. Main Street, Suite #100\n' +
      'Cleveland, OH 44115',
  }}
/>
