import React from 'react'
import { HeaderMenu } from '../menu'
import { UserMenu } from '../user'
import { MenuButton } from '../menu/menuButton'

import styles from './.module.css'
import type { TLogo, TMainMenu } from '../../api/context/types'

import prozhitoLogo from '../../assets/prozhito_logo_ru.svg'
import euspLogo from '../../assets/eusp.svg'

type THeaderData = {
  logos?: Array<TLogo>
  main_menu?: Array<TMainMenu>
  account?: boolean
}

export const Header = ({ main_menu = [], account = false }: THeaderData) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__links}>
          <a href="https://prozhito.org/">
            <img width={156} height={30} src={prozhitoLogo} alt="Logo" />
          </a>
          <a href="https://eusp.org/" target="_blank">
            <img width={101.6} height={30} src={euspLogo} alt="Logo" />
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
