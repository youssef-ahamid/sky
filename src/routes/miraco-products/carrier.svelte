<script context="module">
  import { getSection } from '$lib/gql'

  export async function load() {
    let section = await getSection('carrier-products')

    return {
      props: {
        section,
      },
    }
  }
</script>


<script>
  import ProductsHero from '$lib/sections/Products-Hero.svelte'
  import Products from '$lib/sections/Products.svelte'

  export let section
  import { getComponentData } from '$lib/helpers'
  let products = getComponentData(section.content, 'Product') 
</script>

<ProductsHero
  title="Authorized dealer since 2000"
  logos={[
    {
      url: 'https://miraco.com.eg/images/miraco-logo.png',
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Logo_of_the_Carrier_Corporation.svg/2560px-Logo_of_the_Carrier_Corporation.svg.png',
    },
    {
      url: 'https://logos-download.com/wp-content/uploads/2016/05/Midea_logo.png',
    },
  ]}
/>

<Products {products} />
