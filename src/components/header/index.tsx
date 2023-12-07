import React, { useEffect, useState } from 'react'
import { Header } from './header'
import { getContextData } from '../../api'
import { TMainMenu } from '../../api/types'

export const ProzhitoHeader = ({ main_menu }: { main_menu?: TMainMenu[] }) => {
  const [menu, setMenu] = useState(main_menu)

  useEffect(() => {
    if (!menu) {
      getContextData().then(({ data, error }) => {
        if (!error && data) setMenu(data.main_menu)
      })
    }
  }, [])

  return <Header main_menu={menu} />
}
