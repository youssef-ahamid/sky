<script>
  import { getComponentData } from '$lib/helpers'

  export let fullHeight = false
  export let color = 'neutral-light'
  export let background = {}
  export let path = '/'
  export let preheader
  export let title = ''
  export let description = ''
  export let content = {}
  export let hero = {}
  export let button = {}
  export let statistic = {}
  if (!hero || !hero.title) hero = getComponentData(content, 'Hero')
  button = getComponentData(content, 'Button')
  if (!statistic) statistic = getComponentData(content, 'Statistic')

  import Breadcrumb from '$lib/components/Breadcrumb/Breadcrumb.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Tween from '$lib/components/Tween/Tween.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import Triangles from '$lib/components/Triangles/Triangles.svelte'
  import Preload from '$lib/components/Preload/Preload.svelte'

  let tweens = []
  let timeout
  const tweenAll = () => tweens.forEach(tween => tween.set(1))
  const untweenAll = () => tweens.forEach(tween => tween.set(0))
</script>

{#if !!background}
  <Preload src={background.url} />
{/if}
{#if !!hero.image}
  <Preload src={hero.image.url} />
{/if}

<Section
  color={color == 'secondary' ? 'neutral-light' : 'secondary'}
  {fullHeight}
  bg={!!background ? background.url : ''}
>
  <Hero {fullHeight} className="text-{color}">
    <div slot="left" class="flex flex-col items-start space-y-2">
      <Animateonenterview>
        {#if !!preheader}
          <h3
            class="text-{color == 'secondary'
              ? 'primary'
              : 'neutral-light'}"
          >
            {preheader}
          </h3>
        {:else}
          <Breadcrumb
            {path}
            className={color == 'secondary'
              ? 'text-primary'
              : 'text-neutral-light'}
          />
        {/if}
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="200">
        <h1 class="">{hero.title}</h1>
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="500">
        {#if !!hero.description}
          <p class="font-medium">{hero.description}</p>
        {/if}
      </Animateonenterview>
      <Animateonenterview delay="1200">
        {#if Array.isArray(button)}
          <div class="flex space-x-2 md:space-x-8 items-center">
            {#each button as btn}
              <Go to={btn.url} className="my-8">
                <Button {...btn} />
              </Go>
            {/each}
          </div>
        {:else if !!button && !!button.url}
          <Go to={button.url} className="my-8">
            <Button {...button} />
          </Go>
        {/if}
      </Animateonenterview>
      <slot {color} />
    </div>
    {#if !!statistic && statistic.length > 0}
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
    {/if}
    <div slot="right">
      {#if !!hero.image}
        <Animateonenterview type="flyRight" delay="1500">
          <Image
            src={hero.image.url}
            type="custom"
            clip={Triangles}
          />
        </Animateonenterview>
      {/if}
    </div>
  </Hero>
</Section>
