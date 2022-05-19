<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status },
    }
  }
</script>

<script>
  export let error, status
  import Button from '$lib/components/Button/Button.svelte'
  import Go from '$lib/components/Go/Go.svelte'
</script>

<svelte:head>
  <title>oops! - Status {status}</title>
</svelte:head>

<div
  class="w-screen h-screen flex flex-wrap justify-center items-center p-4"
>
  <div class="text-center">
    <h2 class="text-primary pb-12">{status}</h2>
    <h1>Got lost?</h1>
    <br />
    <p>{error.message}</p>
    <br />
    <Go to="/" className="text-primary m-3 flex justify-center w-full"
      >
      <Button
        shape="ghost"
        type="primary"
        label="back to home"
      />
    </Go>
  </div>
</div>
