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
    siteEmail: 'info@skyfortc.com'
  }

  function mail() {
    if (mailedTo == emailInput.value) return
    
    mailedTo = emailInput.value
    emailInput.cta.label = 'sent!'
    emailInput.refresh()

    const message = {
      to: emailInput.value,
      subject: "Thank you for leaving your email. We'll be in touch soon!",
      template: "message-sent", // email template used
      data: { email: emailInput.value, ...siteData }, // data to populate template,
      replyTo: "info@skyfortc.com",
    }
    fetch(`https://zaagel.samuraisoftware.house/mail`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(message),
    })
  }

  /* styles */
  import { stylus } from '$lib/helpers'
  import { preheaderStyles, titleStyles } from './styles'
  import TextInput from '$lib/components/Text Input/Text Input.svelte'

  $: prehead = stylus(preheaderStyles({ color: 'neutral-light' }))
  $: tit = stylus(titleStyles())
</script>

<Section
  color="secondary"
  className="bg-secondary text-neutral-light py-20"
  {fullHeight}
  bg={!!background ? background.url : ''}
>
  <div
    class="flex flex-col lg:flex-row items-start lg:items-center justify-between"
  >
    <div class="min-w-[50%]">
      <h3 class={prehead.classes}>{preheader}</h3>
      <h2 class={tit.classes}>{title}</h2>
    </div>
    <div class="flex justify-end w-full">
      <TextInput
        bind:this={emailInput}
        bind:value={input.value}
        on:submit={mail}
        {...input}
        className="my-4 mx-6 max-w-md ring-neutral-light"
        on:change={() => (emailInput.cta.label = 'send')}
      />
    </div>
  </div>
</Section>
