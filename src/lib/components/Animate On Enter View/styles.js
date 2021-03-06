export const animationWrapper = props => {
  return [
    {
      classes:
        'transition duration-700 ease-out delay-100 oveflow-hidden',
      on: true,
    },
    {
      classes: 'opacity-0',
      on: props.type == 'fade' && !props.intersecting,
    },
    {
      classes: 'opacity-100',
      on: props.type == 'fade' && props.intersecting,
    },
    {
      classes: 'translate-x-20 opacity-0',
      on: props.type == 'flyRight' && !props.intersecting,
    },
    {
      classes: 'translate-x-0 opacity-100',
      on: props.type == 'flyRight' && props.intersecting,
    },
    {
      classes: '-translate-x-20 opacity-0',
      on: props.type == 'flyLeft' && !props.intersecting,
    },
    {
      classes: 'translate-x-0 opacity-100',
      on: props.type == 'flyLeft' && props.intersecting,
    },
    {
      classes: 'translate-y-12 opacity-0',
      on: props.type == 'flyUp' && !props.intersecting,
    },
    {
      classes: 'translate-y-0 opacity-100',
      on: props.type == 'flyUp' && props.intersecting,
    },
  ]
}
