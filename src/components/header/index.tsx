import React from 'react'
import { Header } from './header'
import { getContextData } from '../../api/context'
import type { TMainMenu } from '../../api/context/types'

async function getContext() {
  return await getContextData().then(({ data, error }) => {
    if (!error && data && data.main_menu) return data.main_menu
    return []
  })
}

export const ProzhitoHeader = async ({ main_menu, account = false }: { main_menu?: TMainMenu[]; account?: boolean }) => {
  // console.log('ProzhitoHeader SSR:', typeof window === 'undefined')
  const data = main_menu || (await getContext())

  return <Header main_menu={data} account={account} />
}
