import React from 'react'

type SSRCssModule = {
  css: string
  id: string
}

interface GlobalThis {
  __ssr_css?: SSRCssModule[]
}

export const StylesInject: React.FC = () => {
  const { __ssr_css: css } = globalThis as GlobalThis
  if (!css) return null
  console.log('Styles injected length:', css.length)

  return (
    <>
      {css.map((module: { css: string; id: string }) => (
        <style
          dangerouslySetInnerHTML={{
            __html: module.css,
          }}
          id={module.id}
          key={module.id}></style>
      ))}
    </>
  )
}
