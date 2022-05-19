<script context="module">
  import { getJob } from '$lib/gql'

  export async function load({ params }) {
    let job = await getJob(params.slug)

    return {
      props: {
        job,
      },
    }
  }
</script>

<script>
  import PageTransition from '$lib/components/Page Transition/Page Transition.svelte'
  import Html from '$lib/sections/HTML.svelte'
  import JobHero from '$lib/sections/Job-Hero.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Modal from '$lib/components/Modal/Modal.svelte'
  import Form from '$lib/components/Form/Form.svelte'

  let inputs = [
    {
      type: 'text',
      validations: ['required', 'email'],
      label: 'Email',
    },
    {
      type: 'file',
      validations: ['required'],
      label: 'CV',
    },
  ]

  export let job
  let modal, email
  let applying = false
  const apply = () => {
    email.click()
  }
  const submit = e => {}
</script>

<PageTransition>
  {job.title}
</PageTransition>

<a
  href="mailto:info@skyfortc.com?subject=Apply%20For%20the%20Role%20of%20{job.title}"
  bind:this={email}
  class="hidden"
  target="_blank">...</a
>

<!-- <Modal bind:this={modal}>
  <h2>
    Apply for the role of <span class="text-primary">{job.title}</span
    >
  </h2>

  <Form
    button={{ label: 'Apply', type: 'primary' }}
  >
    
    
  </Form>
</Modal> -->

<JobHero {job} on:apply={apply} />

<Html
  content={job.info.html}
  className="project-content md:max-w-[70%] mx-auto mb-10"
>
  <Button type="primary" label="Apply" on:click={apply} />
</Html>
