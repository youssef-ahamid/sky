<script>
    export let className = ''
    
    /* styles */
    import { stylus } from '$lib/helpers'
    import { card } from './styles'

    $: wrapper = stylus(card())
</script>

<div class="{`${wrapper.classes} ${className}`}">
    <slot/>
</div>
