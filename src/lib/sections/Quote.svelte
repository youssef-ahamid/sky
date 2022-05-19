<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import Person from '$lib/components/Person/Person.svelte'
  import Preload from '$lib/components/Preload/Preload.svelte'

  import Section from '$lib/sections/Section.svelte'

  export let data = {}
  let q = data.content[0]
</script>

<Preload src={q.teamMember.image.url} />
<Section
  id="quote"
  className="py-16"
  color="neutral-light"
  bg="primary"
  {...data}
>
  <div class="flex justify-around items-start">
    <div class="md:max-w-[50%]">
      <Animateonenterview type="flyLeft" delay="100">
        <q
          class="text-xl md:text-3xl font-semibold md:max-w-[80%] block"
          >{q.quote}</q
        >
      </Animateonenterview>
      <Animateonenterview type="flyUp" delay="300">
        <Person {...q.teamMember} />
      </Animateonenterview>
    </div>
    <Animateonenterview type="flyRight" delay="800">
      <Image
        type="square"
        src={q.teamMember.image.url}
        alt={q.teamMember.name}
      />
    </Animateonenterview>
  </div>
</Section>
