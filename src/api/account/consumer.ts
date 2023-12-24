'use client'

import { Account } from './account'
export const AccountConsumer = ({ error, user }: { error?: string; user?: Record<string, string> }) => {
  if (user) new Account().user = user
  return null
}
