'use client'

import { Account } from './account'
export const AccountConsumer = ({ error, user }: { error?: string; user?: Record<string, string> }) => {
  const account = new Account()
  if (user) account.user = user
  return null
}
