<script>
  import Section from '$lib/components/Section/Section.svelte'
  import Filter from '$lib/components/Filter/Filter.svelte'
  import { flip } from 'svelte/animate'

  export let component
  export let selected = ''
  export let items = []
  export let matchingKey = ''
  export let secondaryMatchingKey = ''
  export let matchInArray = false
  export let title = ''
  export let filters = []

  $: activeItems =
    selected.toLowerCase() == 'all'
      ? items
      : matchInArray
      ? items.filter(it => {
          return it[matchingKey]
            .map(i => i[secondaryMatchingKey].toLowerCase())
            .includes(selected.toLowerCase())
        })
      : items.filter(item => item[matchingKey] == selected)

  const select = e => (selected = e.detail)
</script>

<Section noContain className="mt-32 relative">
  <div
    class="w-full sticky top-0 left-0 right-0 bg-neutral-light py-3 text-center"
  >
    <h2 class="py-2 capitalize">{title}</h2>
    <Filter {filters} on:filter={select} bind:active={selected} />
  </div>

  {#each activeItems as item (item.title)}
    <div class="block" animate:flip={{ duration: 500 }}>
      <svelte:component this={component} {...item} />
    </div>
  {/each}
</Section>
