// const DEV = process.env.NODE_ENV === 'development'

export const getLifespan = (days: number) => {
  const age = 60 * 60 * 24 * days
  return new Date(Date.now() + age * 1000).toUTCString()
}

export const setCookie = (props: Record<string, string>) => {
  let cookieString = Object.entries(props).reduce((acc, [key, val]) => (acc += `${key}=${val};`), '')
  // if (!DEV) cookieString += 'secure=true'
  document.cookie = cookieString
}

export const getCookieValue = (key: string) => {
  return typeof document !== 'undefined' ? document.cookie.replace(new RegExp(`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`), '$1') : ''
}
