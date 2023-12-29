export { User } from './user'

import React from 'react'
import { Menu } from './menu'
import { cookies } from 'next/headers'
import { authWithToken } from '../../api/account'

async function getUser() {
  const cookie = cookies()
  const [access, refresh] = [cookie.get('access')?.value, cookie.get('refresh')?.value]
  if (access || refresh) {
    return await authWithToken(access, refresh)
  }
}

export const UserMenu = async () => {
  const data = await getUser()

  return <Menu user_data={data} />
}
