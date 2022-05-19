<script>
  import Clock from '$lib/icons/shape/clock.svelte'
  import Earth from '$lib/icons/Earth.svelte'
  import Information from '$lib/icons/shape/information.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/sections/Hero.svelte'
  import { timeSince } from '$lib/helpers'
  import { path } from '$lib/stores'
import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher()
  export const apply = e => dispatch('apply', e)
  

  export let job
</script>

<Hero
  path={$path}
  fullHeight
  hero={{ title: `Apply for the role of ${job.title} at Sky` }}
  color="secondary"
>
  <div
    class="flex flex-wrap md:flex-nowrap justify-start space-y-6 md:justify-between md:space-x-10 md:space-y-0"
  >
    <div class="flex-col space-y-4">
      <div class="flex items-start">
        <Clock className="w-6 h-6 mr-2 text-primary opacity-50" />
        <p class="body-sm">{timeSince(job.updatedAt, 'minutes')}</p>
      </div>
      <div class="flex items-start">
        <Earth className="w-6 h-6 mr-2 text-primary opacity-50" />
        <p class="body-sm">{job.location}</p>
      </div>
    </div>
    <div class="flex items-start max-w-sm">
      <Information className="w-12 mr-2 text-primary opacity-50" />
      <p class="body-sm">{job.brief}</p>
    </div>
  </div>
  <div class="mt-2">
    <Button label="Apply" type="primary" on:click={apply} />
  </div>
</Hero>
