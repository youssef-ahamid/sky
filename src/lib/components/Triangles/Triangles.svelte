<script>
import Triangle from "$lib/icons/shape/triangle.svelte";

let innerWidth

$: mobile = innerWidth < 700

</script>

<svelte:window bind:innerWidth />


<div class="overflow-visible hidden md:block">
  <div
    class="transition absolute top-0 left-0 duration-500 w-40 md:w-52 m-3 z-10 group-focus-within:-translate-y-12 group-hover:-translate-y-12 group-focus-within:-translate-x-24 group-hover:-translate-x-24 text-neutral-light overflow-hidden"
  >
    <Triangle
      width={200}
      height={150}
      className="rotate-180"
      strokeWidth={1}
    />
  </div>
  <div
    class="absolute -right-6 md:-right-8 top-0 z-0 w-48 md:w-64 text-neutral-light group-focus-within:translate-x-12 group-hover:translate-x-12 group-focus-within:-translate-y-12 group-hover:-translate-y-12 transition duration-300 ease-out"
  >
    <Triangle
      width={200}
      height={150}
      className="-rotate-90"
      strokeWidth={1}
    />
  </div>
  <div
    class="absolute -left-6 md:-left-8 bottom-8 md:bottom-0 z-0 w-48 md:w-64 text-primary group-focus-within:-translate-x-12 group-hover:-translate-x-12 group-focus-within:translate-y-12 group-hover:translate-y-12 transition duration-300 ease-out"
  >
    <Triangle
      width={300}
      height={200}
      className="rotate-90"
      strokeWidth={1}
    />
  </div>
</div>
