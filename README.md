# [Prozhito project](https://prozhito.org/) React components UI library

## Installation:

`npm install https://github.com/prozhito/lib --save`

## Usage:

### `ProzhitoHeader` <u>client</u> example

[![preview](./docs/assets/header_preview.png)](#ProzhitoHeader)

- Importable `Header` ui component with its own logo images (SSR).
- Header menu with mobile version and menu content fetcher (SSR).

```tsx
'use client'
import { ProzhitoHeader } from '@prozhito/lib'

function Layout() {
  const [Header, setHeader] = React.useState<React.JSX.Element | null>(null)

  React.useEffect(() => {
    ProzhitoHeader().then(header => setHeader(header))
  }, [])

  return (
    <>
      {Header}
      <main></main>
      <footer></footer>
    </>
  )
}

export default Layout
```

### `ProzhitoHeader` <u>server</u> example with account

[![preview](./docs/assets/header_preview_account.png)](#ProzhitoHeader)

- Optional user menu button (CSR).
- `Account` class (some sort of custom state manager).
- Secure auto auth with token or refresh token (SSR).
- Account modal with ability to login/logout/view user info (CSR).
- Importable `useUser` hook, that provides access to user info.

```tsx
import { ProzhitoHeader, StylesInject } from '@prozhito/lib'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StylesInject />
      </head>
      <body>
        <ProzhitoHeader account={true} />
        {children}
      </body>
    </html>
  )
}

export default Layout
```
