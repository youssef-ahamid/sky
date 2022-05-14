<script>
  import Section from '$lib/components/Section/Section.svelte'
  import Filter from '$lib/components/Filter/Filter.svelte'
  import { flip } from 'svelte/animate'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  export let component
  export let selected = ''
  export let items = []
  export let matchingKey = ''
  export let secondaryMatchingKey = ''
  export let matchInArray = false
  export let title = ''

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  let filters = ['all']
  items.forEach(it =>
    matchInArray
      ? filters.push(
          ...it[matchingKey].map(i =>
            i[secondaryMatchingKey].toLowerCase()
          )
        )
      : filters.push(it[matchingKey])
  )
  filters = filters.filter(onlyUnique)
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

<Section
  noContain
  fullHeight
  id="filters"
  className="mt-1 pt-8 overflow-auto"
  color="neutral-light"
>
  <div
    class="w-full sticky top-6 md:top-12 left-0 right-0 bg-neutral-light py-3 text-center"
  >
    <Animateonenterview>
      <h2 class="py-2 capitalize">{title}</h2>
    </Animateonenterview>
    <Animateonenterview type="flyUp">
      <Filter {filters} on:filter={select} bind:active={selected} />
    </Animateonenterview>
  </div>
  <div
    class="flex flex-wrap justify-center p-4 mt-6 md:max-w-[90%] mx-auto"
  >
    {#each activeItems as item, i (item.title)}
      <div class="block" animate:flip={{ duration: 500 }}>
        <Animateonenterview
          type={i % 2 === 0 ? 'flyLeft' : 'flyRight'}
          delay="100"
        >
          <svelte:component
            this={component}
            {...item}
            additionalImageData={{ type: 'custom', clip: Triangles }}
            reverse={i % 2 === 1}
            cta={{
              link: `/projects/${item.slug}`,
              label: 'view project',
              icon: 'chevron_right',
              shape: 'ghost',
            }}
          />
        </Animateonenterview>
      </div>
    {/each}
  </div>
</Section>
