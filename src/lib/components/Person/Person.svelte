<script>
  /* props */
  export let avatar = {}
  export let name = ''
  export let caption = ''
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  /* styles */
  import { stylus } from '$lib/helpers'
  import Image from '../Image/Image.svelte'
  import { TextWrapper, PersonWrapper } from './styles'

  $: wrapper = stylus(PersonWrapper(styleOptions))
  $: textWrapper = stylus(TextWrapper(styleOptions))
</script>

<div class={`${wrapper.classes} ${className}`}>
  <Image type="avatar" {...avatar} alt={name} />
  <div class={textWrapper.classes}>
    <p class="font-semibold" />
    <p class="body-sm font-medium">{caption}</p>
  </div>
</div>
