<script>
import Triangle from "$lib/icons/shape/triangle.svelte"
</script>

<div class="overflow-visible hidden lg:block">
  <div
    class="scale-75 origin-top-left transition absolute top-0 left-0 duration-500 w-40 md:w-52 m-3 z-10 group-focus-within:-translate-y-12 group-hover:-translate-y-12 group-focus-within:-translate-x-24 group-hover:-translate-x-24 text-neutral-light overflow-hidden"
  >
    <Triangle
      width={200}
      height={150}
      className="rotate-180"
      strokeWidth={1}
    />
  </div>
  <div
    class="scale-75 origin-bottom-right absolute -right-6 md:-right-6 -top-12 z-[-1] w-48 md:w-64 text-neutral-light group-focus-within:translate-x-12 group-hover:translate-x-12 group-focus-within:-translate-y-12 group-hover:-translate-y-12 transition duration-300 ease-out"
  >
    <Triangle
      width={200}
      height={150}
      className="-rotate-90"
      strokeWidth={1}
    />
  </div>
  <div
    class="scale-75 origin-top-right absolute -left-6 md:-left-24 bottom-8 lg:-bottom-16 z-[-1] w-48 md:w-64 text-primary group-focus-within:-translate-x-12 group-hover:-translate-x-12 group-focus-within:translate-y-12 group-hover:translate-y-12 transition duration-300 ease-out"
  >
    <Triangle
      width={300}
      height={200}
      className="rotate-90"
      strokeWidth={1}
    />
  </div>
</div>
