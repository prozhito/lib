import React, { FC, useState } from 'react'
import { useRouter } from '../../hooks/useRouter'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { HeaderMenu } from '../menu'
// import { UserMenu } from '../user'

import styles from './.module.css'
import { TLogo, TMainMenu } from '../../api/types'
import { NEXT_PUBLIC_MEDIA_URL } from '../../api/constants'

import openImg from '../../assets/menu-mobil-open.svg'
import closeImg from '../../assets/menu-mobil-close.svg'
import prozhitoLogo from '../../assets/prozhito_logo_ru.svg'
import euspLogo from '../../assets/eusp.svg'
console.log(euspLogo)

type THeaderData = {
  logos: Array<TLogo>
  main_menu: Array<TMainMenu>
}

export const Header: FC<THeaderData> = ({ logos, main_menu }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const desktop = useMediaQuery('(min-width: 768px)')
  const router = useRouter()

  const btnState = menuOpen ? { img: closeImg, alt: 'Закрыть' } : { img: openImg, alt: 'Открыть' }

  const toggleMobileMenu = (): void => {
    setMenuOpen(prevState => !prevState)
  }

  return (
    <header
      className={`${!desktop && menuOpen ? `${styles.header} ${styles.header_theme_dark}` : styles.header} ${
        router.pathname !== '/' ? styles.header_theme_white : ''
      }`}>
      <div className={styles.header__container}>
        <div className={styles.header__links}>
          <a href="https://prozhito.org/">
            <img width={156} height={30} src={prozhitoLogo} alt="Logo" />
          </a>
          <a href="https://eusp.org/">
            <img width={101.6} height={30} src={euspLogo} alt="Logo" />
          </a>
        </div>

        <HeaderMenu desktop={desktop} open={menuOpen} main_menu={main_menu} onClose={toggleMobileMenu} />

        <div className={styles.header__buttons}>
          {/* <UserMenu /> */}
          <button className={styles.menu__button} onClick={toggleMobileMenu}>
            <img alt={btnState.alt} src={btnState.img} />
          </button>
        </div>
      </div>
    </header>
  )
}
