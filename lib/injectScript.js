const injectScript = (src) => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.async = true
  s.src = src
  const t = document.getElementsByTagName('script')[0]
  t.parentNode.insertBefore(s, t)
}

export default injectScript;