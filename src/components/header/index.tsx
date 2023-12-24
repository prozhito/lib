import React from 'react'
import { Header } from './header'
import { getContextData } from '../../api/context'
import type { TMainMenu } from '../../api/context/types'
import { cookies } from 'next/headers'
import { authWithToken } from '../../api/account/actions/auth'

async function getUser() {
  const cookie = cookies()
  const [access, refresh] = [cookie.get('access')?.value, cookie.get('refresh')?.value]
  if (access || refresh) {
    return await authWithToken(access, refresh)
  }
}

async function getContext() {
  return await getContextData().then(({ data, error }) => {
    if (!error && data && data.main_menu) return data.main_menu
    return []
  })
}

export const ProzhitoHeader = async ({ main_menu, account = false }: { main_menu?: TMainMenu[]; account?: boolean }) => {
  console.log('ProzhitoHeader Server:', typeof window === 'undefined')
  const data = account ? await getUser() : { user: undefined, error: '' }
  main_menu = main_menu || (await getContext())
  // console.log('account:', data)

  return <Header main_menu={main_menu} account={account} user_data={data} />
}
