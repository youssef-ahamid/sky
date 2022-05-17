<script>
  import Section from '$lib/components/Section/Section.svelte'
  import { getComponentData } from '$lib/helpers'

  export let preheader = ''
  export let title = ''
  export let fullHeight = false
  export let background = {}
  export let content = {}
  export let input = getComponentData(content, 'TextInput')

  let emailInput, mailedTo

  const siteData = {
    siteName: 'skyfortc.com',
    siteOwner: 'Sky For Trading & Contracting',
    siteEmail: 'info@skyfortc.com',
  }

  function mail() {
    if (mailedTo == emailInput.value) return

    mailedTo = emailInput.value
    emailInput.cta.label = 'sent!'

    const message = {
      to: emailInput.value,
      subject:
        "Thank you for leaving your email. We'll be in touch soon!",
      template: 'message-sent', // email template used
      data: { email: emailInput.value, ...siteData }, // data to populate template,
      replyTo: 'info@skyfortc.com',
    }
    fetch(`https://zaagel.samuraisoftware.house/mail`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(message),
    })
  }

  /* styles */
  import { stylus } from '$lib/helpers'
  import { preheaderStyles, titleStyles } from './styles'
  import TextInput from '$lib/components/Text Input/Text Input.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  $: prehead = stylus(preheaderStyles({ color: 'neutral-light' }))
  $: tit = stylus(titleStyles())
</script>

<Section
  color="secondary"
  className="bg-secondary text-neutral-light py-20"
  id="contact"
  {fullHeight}
  bg={!!background ? background.url : ''}
>
  <div
    class="flex flex-col lg:flex-row items-start lg:items-center justify-between"
  >
    <div class="min-w-[40%] md:max-w-[50%] my-5">
      <Animateonenterview type="flyLeft" delay="300">
        <h2 class="pb-1">{preheader}</h2>
      </Animateonenterview>
      <Animateonenterview type="flyLeft" delay="500">
        <p>{title}</p>
      </Animateonenterview>
    </div>
    <div class="flex justify-start md:justify-end w-full">
      <Animateonenterview type="flyRight" delay="800">
        <TextInput
          bind:this={emailInput}
          on:submit={mail}
          validateOnChange
          {...input}
          className="my-4 mx-6 ring-neutral-light"
          on:change={() => (emailInput.cta.label = 'send')}
        />
      </Animateonenterview>
    </div>
  </div>
</Section>
