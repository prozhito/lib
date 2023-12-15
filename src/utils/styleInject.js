export default function styleInject(css, id, { insertAt } = {}) {
  if (!css) return
  if (typeof document === 'undefined') {
    globalThis.__ssr_css = globalThis.__ssr_css || []
    const keys = globalThis.__ssr_css.reduce((acc, curr) => ({ ...acc, [curr.id]: { ...curr } }), {})
    if (!keys[id]) {
      globalThis.__ssr_css.push({ css, id })
    }
    return
  }

  if (document.getElementById(id)) return

  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.id = id
  style.type = 'text/css'

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild)
    } else {
      head.appendChild(style)
    }
  } else {
    head.appendChild(style)
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
}
