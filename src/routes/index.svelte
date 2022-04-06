<script>
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
</script>

<Hero fullHeight>
  <Button label="hamada" type="primary" />
</Hero>
<Hero fullHeight className="bg-secondary">
  <Button label="hamada" type="secondary" />
</Hero>
