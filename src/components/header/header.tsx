import React from 'react'
import { HeaderMenu } from '../menu'
import { UserMenu } from '../user'
import { MenuButton } from '../menu/menuButton'

import styles from './.module.css'
import type { TMainMenu } from '../../api/context/types'

import prozhitoLogo from '../../assets/prozhito_logo_ru.svg'
import euspLogo from '../../assets/eusp_logo_ru.svg'

type THeaderData = {
  main_menu?: Array<TMainMenu>
  account?: boolean
}

export const Header = ({ main_menu = [], account = false }: THeaderData) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__links}>
          <a href="/">
            <img src={prozhitoLogo} alt="Logo" />
          </a>
          <a href="https://eusp.org/" target="_blank">
            <img src={euspLogo} alt="Logo" />
          </a>
        </div>

        <HeaderMenu main_menu={main_menu} />

        <div className={styles.header__buttons}>
          {account && <UserMenu />}
          <MenuButton />
        </div>
      </div>
    </header>
  )
}
