<script>
  export let fullHeight = false
  export let background = {}
  export let path = '/'
  export let hero = {}
  export let button = []
  export let statistic = []

  import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Tween from '$lib/components/Tween/Tween.svelte'

  let tweens = []
  let timeout
  const tweenAll = () => tweens.forEach(tween => tween.set(1))
  const untweenAll = () => tweens.forEach(tween => tween.set(0))
</script>

<Section color="secondary" {fullHeight} bg={background.url}>
  <Hero fullHeight className="text-white">
    <div slot="left" class="flex flex-col items-start space-y-2">
      <Animateonenterview>
        <Breadcrumb {path} />
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="200">
        <h1>{hero.title}</h1>
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="500">
        <p>{hero.description}</p>
      </Animateonenterview>
      <Animateonenterview delay="1200">
        <div class="my-8">
          <Button {...button[0]} />
        </div>
      </Animateonenterview>
    </div>
    <Animateonenterview
      delay="1200"
      type="flyUp"
      on:enter={() => {
        timeout = setTimeout(tweenAll, 1500)
      }}
      on:exit={untweenAll}
      className="flex text-center mx-auto w-4/5 md:justify-end absolute bottom-[5%] md:bottom-[15%] justify-center md:right-10"
    >
      {#each statistic as stat, i}
        <div class="mx-3 min-w-fit">
          <p>{stat.title}</p>
          <p class="body-xl font-bold">
            +<Tween val={stat.number} bind:this={tweens[i]} />
          </p>
        </div>
      {/each}
    </Animateonenterview>
  </Hero>
</Section>
