<svelte:options accessors={true} />

<script>
  import clickOutside from '$lib/actions/clickOutside'
  import { fade, fly } from 'svelte/transition'
  export let active = false
  export let key = 0

  export const activate = () => {
    active = true
    key++
  }
</script>

{#if active}
  {#key key}
    <div
      class="fixed inset-0 z-[999] flex h-screen w-screen items-center justify-center bg-secondary bg-opacity-75"
      transition:fade={{ duration: 300 }}
    >
      <div
        class="max-h-fit max-w-fit flex-1 overflow-hidden rounded-3xl bg-neutral-light p-12 text-secondary md:max-w-xl md:rounded-[50px] md:p-20"
        id="modal"
        transition:fly={{ duration: 300, y: 50, delay: 200 }}
        use:clickOutside
        on:outclick={() => (active = false)}
      >
        <slot />
      </div>
    </div>
  {/key}
{/if}
