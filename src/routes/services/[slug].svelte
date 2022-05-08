<script>
import Filter from "$lib/components/Filter/Filter.svelte";
import Hero from "$lib/components/Hero/Hero.svelte";
import Section from "$lib/components/Section/Section.svelte";
let filters = ['all', 'infrastructure', 'mep', 'turnkey', 'finishing']


</script>

<Section noContain className="mt-32 relative">
    <div class="w-full sticky top-0 left-0 right-0 bg-neutral-light py-3 text-center">
        <h2 class="py-2">Browse Projects</h2>
        <Filter {filters} on:filter={select} active="All" />
    </div>
    <Hero fullHeight></Hero>
    <Hero fullHeight></Hero>
</Section>