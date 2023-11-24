import React, { FC } from 'react'
import { ExternalLink } from '../links'

import styles from './.module.css'

import { TMainMenu } from '../../api/types'

type THeaderMenuProps = {
  desktop: boolean
  open: boolean
  main_menu: Array<TMainMenu>
  onClose?: () => void
}

export const HeaderMenu: FC<THeaderMenuProps> = ({ desktop, open, main_menu, onClose }) => {
  const isMobileMenuStyle = open ? styles.menu__mobile : `${styles.menu__mobile} ${styles.menu__mobile_open}`

  const isMobileContainerStyle = open ? `${styles.menu__mobileContainer} ${styles.menu__mobileContainer_open}` : styles.menu__mobileContainer

  const style = desktop ? styles.menu__desktop : isMobileMenuStyle

  const secondLevel = main_menu.filter(item => item.children)

  // console.log('main_menu', main_menu)

  return (
    <nav className={desktop ? styles.menu__desktopContainer : isMobileContainerStyle}>
      <ul className={style}>
        {main_menu.map((item, index) => {
          return (
            <li className={styles.menu__item} key={index} onClick={onClose}>
              <ExternalLink url={(item.page_slug || item.url) ?? '#'} target_blank={item.target_blank}>
                {item.title}
              </ExternalLink>

              {desktop && item.children && item.children.length > 0 && (
                <ul className={styles.menu__dropdown}>
                  {item.children.map((item, index) => {
                    return (
                      <li className={styles.menu__item} key={index} onClick={onClose}>
                        <ExternalLink url={item.page_slug || item.url} target_blank={item.target_blank}>
                          {item.title}
                        </ExternalLink>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
      <div className={styles.menu__dropdown_bg}></div>
      {!desktop && secondLevel.length > 0 && (
        <ul className={`${secondLevel.length <= 3 ? style : styles.menu__mobile_secondLevel}`}>
          {secondLevel.map(item => {
            return item.children?.map((child, index) => {
              return (
                <li className={styles.menu__item} key={index} onClick={onClose}>
                  <ExternalLink url={(child.page_slug || child.url) ?? '#'} target_blank={item.target_blank}>
                    {child.title}
                  </ExternalLink>
                </li>
              )
            })
          })}
        </ul>
      )}
    </nav>
  )
}
