import React from 'react'
import { Account } from '../account'

type TUser = Record<string, string>

export const useUser = () => {
  const account = React.useMemo(() => new Account(), [])

  const [state, setState] = React.useState<TUser | null>(account.info().user)

  const update = React.useCallback(() => setState(account.info().user), [])

  React.useEffect(() => {
    new Account(update)
  }, [])

  return state
}
