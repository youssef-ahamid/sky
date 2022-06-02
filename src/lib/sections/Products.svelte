<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'
  import Product from '$lib/components/Product/Product.svelte'
  import Section from '$lib/sections/Section.svelte'
  import Geometry from '$lib/icons/geometry/Triangles.svelte';

  export let products
</script>

<Section
  id="products"
  className="py-8 relative"
  color="neutral-light"
  bg="neutral-light"
  center
>
{#each products as product, i}
      <div
        class="absolute w-8 md:w-12 text-primary {i % 2 === 0
          ? '-left-1'
          : '-right-1 -scale-x-100'}"
        style="top: {10 + 25 * i}rem"
      >
        <Geometry active />
      </div>
    {/each}
  <List
    className="flex items-start justify-around flex-wrap space-x-4 mt-6"
    items={products}
    let:prop={product}
  >
    <Product {...product} />
  </List>
</Section>
