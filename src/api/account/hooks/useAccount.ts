'use client'
import React from 'react'
import { Account } from '../account'

type TUser = Record<string, string>

type TAccount = {
  loading: boolean
  error: string
  user: TUser | null
  setUser: (user: TUser) => void
  login: (data: TUser) => void
  logout: () => void
}

export const useAccount = (): TAccount => {
  const account = React.useMemo(() => new Account(), [])

  const setUser = (user: TUser) => {
    if (user) {
      account.user = user
      update()
    }
  }
  const [state, setState] = React.useState<TAccount>({ ...account.info(), setUser, login: account.login, logout: account.logout })

  const update = React.useCallback(() => {
    setState(prev => ({ ...prev, ...account.info() }))
    console.log('account.update.loading:', account.info().loading)
  }, [])

  React.useEffect(() => {
    new Account(update)
  }, [])

  return state
}
