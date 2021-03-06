export const serializeClasses = (styles, condition) => {
  return styles
    .filter(s => condition(s))
    .map(_ => _.classes)
    .join(' ')
}

export const api = {
  post: async function (
    url = '',
    data = {},
    APIURL = '',
    cache = 'default'
  ) {
    let route = APIURL + url

    const response = await fetch(route, {
      method: 'POST',
      mode: 'cors',
      cache: cache,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response.json() // parses JSON response into native JavaScript objects
  },
}

export const is = pair => {
  return pair ? pair[0] == pair[1] : true
}

export const resolve = theme => {
  return theme
    .filter(s => is(s.on))
    .map(_ => _.classes)
    .join(' ')
}

export const stylus = theme => {
  let active = theme.filter(s => s.on)
  return {
    classes: active.map(_ => _.classes).join(' '),
    styles: active.map(_ => _.styles).join(' '),
  }
}

export const getOffset = el => {
  var _x = 0
  var _y = 0
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft
    _y += el.offsetTop - el.scrollTop
    el = el.offsetParent
  }
  return { top: _y, left: _x }
}

export const slugify = text => {
  return text
    .toString()
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

export const getComponentData = (components, component) => {
  if (components.length == 0 || !Array.isArray(components))
    return null
  let data = components.filter(c => c.__typename == component)
  return data.length > 1 ? data : data[0]
}

export const timeSince = (timestamp, maxDepth = 'seconds') => {
  var date = new Date(timestamp)
  var seconds = Math.floor((new Date() - date) / 1000)
  var interval = Math.floor(seconds / 31536000)
  if (interval > 1 || maxDepth == 'years') {
    return interval + ' years ago'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1 || maxDepth == 'months') {
    return interval + ' months ago'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1 || maxDepth == 'days') {
    return interval + ' days ago'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1 || maxDepth == 'hours') {
    return interval + ' hours ago'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1 || maxDepth == 'minutes') {
    return interval + ' minutes ago'
  }
  return Math.floor(seconds) + ' seconds ago'
}
