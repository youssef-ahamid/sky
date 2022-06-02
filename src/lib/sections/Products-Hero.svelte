<script>
  import Button from '$lib/components/Button/Button.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import List from '$lib/components/List/List.svelte'

  export let logos = []
  export let title = ''
</script>

<div class="w-full max-w-2xl px-6 mt-28 mx-auto space-y-10 flex flex-col justify-center min-h-[60vh]">
  <List
    className="flex items-center flex-wrap md:flex-nowrap justify-center space-x-8 space-y-2"
    items={logos}
    let:prop={logo}
  >
    <Image className="w-full max-w-[200px]" src={logo.url} />
  </List>
  <h1 class="text-center">{title}</h1>
</div>
