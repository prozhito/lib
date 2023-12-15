import { getCookieValue } from '../utils'
import { getUser } from './current'
import { getNewToken } from './refresh'

export const authWithToken = async (access: string = '', refresh: string = '') => {
  if (!access && typeof window !== 'undefined') access = getCookieValue('access')
  console.log('have Token:', !!access)
  if (!!access) {
    const res = await getUser(access)
    if (!res.error) return res
  }

  if (!refresh && typeof window !== 'undefined') refresh = getCookieValue('refresh')
  console.log('have Refresh:', !!refresh)
  if (!!refresh) {
    const { access } = await getNewToken(refresh)
    console.log('new Token:', !!access)
    if (!!access) {
      const res = await getUser(access)
      if (!res.error) return res
    }
  }

  return { error: 'No token' }
}
