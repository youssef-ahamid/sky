<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status },
    }
  }
</script>

<script>
  export let error, status
</script>

<svelte:head>
  <title>oops! - Status {status}</title>
</svelte:head>

<div class="w-screen h-screen flex flex-wrap justify-center items-center p-4">
  <div class="text-center">
    <h1>page under construction!</h1>
    <h2 class="text-primary pb-12">{status}</h2>
    <p>{error.message}</p>
  </div>
</div>
