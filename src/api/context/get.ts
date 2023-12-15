import { TContext } from './types'
import { NEXT_PUBLIC_API_URL } from './constants'

export const getContextData = async (): Promise<{ data?: TContext; error?: string }> => {
  try {
    const info = { status: 0, error: '' }
    const response = await fetch(NEXT_PUBLIC_API_URL + 'context/', {
      method: 'GET',
    })
      .then(response => {
        if (response.status !== 200) {
          info.status = response.status
          info.error = response.statusText
          const contentType = response.headers.get('content-type')
          if (contentType && contentType.includes('application/json')) {
            return response.json()
          }
        }
        return response.json()
      })
      .catch(err => {
        info.error = err.message
      })

    if (!!info.error) return { error: response.detail || info.error }
    return { data: response }
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'unknown' }
  }
}
