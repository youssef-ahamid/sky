<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
import Button from '$lib/components/Button/Button.svelte'
import Go from '$lib/components/Go/Go.svelte'

  import Section from '$lib/sections/Section.svelte'

  export let data = {}
  let services = data.content[0].services
  console.log(services)
</script>

<Section
  id="services"
  center
  className="overflow-visible"
  color="secondary"
  {...data}
>
  <div
    class="items-center flex flex-wrap justify-around py-12 overflow-visible"
  >
    {#each services as service, i}
      <Animateonenterview
        className="overflow-visible {i === services.length - 1
          ? 'col-span-full'
          : ''}"
      >
        <div
          class="w-full text-left relative group z-0 hover:z-50 focus-visible:z-50 focus-visible:outline-none"
        >
          <div
            class="pointer-events-none transform {i % 3 == 0
              ? '-skew-y-3'
              : i % 2 == 0
              ? 'skew-y-3'
              : 'skew-y-1'} absolute z-0 opacity-0 translate-x-6 transition duration-300 ease-out group-hover:opacity-100 group-hover:scale-y-[250%] group-hover:scale-x-[110%] origin-right group-focus-visible:opacity-100 inset-0 bg-secondary rounded-3xl"
          />
          <div class="m-4 p-4 h-40 w-72 md:w-80 z-10 relative">
            <div
              style="background-image: url('{service.image.url}');"
              class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            />
            <div
              class="absolute inset-0 bg-secondary opacity-50 group-hover:opacity-0 transition duration-500 ease-out z-[5]"
            />
            <h4
              class="text-xl md:text-2xl text-neutral-light font-bold group-focus-visible:-translate-x-4 z-10 relative group-focus-visible:-translate-y-[150%] group-hover:-translate-x-4 group-hover:-translate-y-[150%] transition duration-500 ease-out"
            >
              {service.title}
            </h4>
          </div>
          <p
            class="m-4 opacity-0 absolute top-0 bottom-0 overflow-visible z-[5] text-neutral-light group-hover:translate-y-[110%] group-hover:opacity-100 group-focus-visible:translate-y-[120%] group-focus-visible:opacity-100 transition duration-500 ease-out body-sm"
          >
            {service.description}
          </p>
        </div>
      </Animateonenterview>
    {/each}
  </div>
  <Go to="/services" className="w-full flex justify-center text-primary pb-8">
    <Button label="view all services" type="primary" shape="ghost" icon="chevron_right" />
  </Go>
</Section>
