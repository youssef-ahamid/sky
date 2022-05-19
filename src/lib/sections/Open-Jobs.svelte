<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import List from '$lib/components/List/List.svelte'
  import Person from '$lib/components/Person/Person.svelte'
  import Title from '$lib/components/Title/Title.svelte'
  import { slugify } from '$lib/helpers'

  import Section from '$lib/sections/Section.svelte'

  export let data = {}
  let jobs = data.content[0].jobs
</script>

<Section
  id="quote"
  className="py-16"
  color="secondary"
  bg="neutral-light"
  center
  {...data}
>
  <List
    className="flex items-start justify-around flex-wrap space-x-4 mt-12"
    items={jobs}
    let:prop={job}
    let:index
  >
    <div
      class="text-left max-w-[360%] text-primary rounded-3xl p-6 shadow-lg"
    >
      <Go to="/careers/{job.slug}">
        <h3 class="">{job.title}</h3>
      </Go>
      <p class="md:w-56 text-secondary pb-4 pt-1">{job.brief}</p>
      <Go
        to="/careers/{job.slug}"
        className="w-full flex justify-end"
      >
        <Button label="view job" shape="ghost" icon="chevron_right" />
      </Go>
    </div>
  </List>
</Section>
