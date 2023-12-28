import React from 'react'
import type { TMainMenu } from '../../api/context/types'

import styles from './.module.css'

function checkPath(url: string | null) {
  return !url ? '#' : url.startsWith('http') ? url : `https://prozhito.org/page/${url}`
}

export const HeaderMenu = ({ main_menu }: { main_menu: TMainMenu[] }) => {
  const secondLevel = main_menu.filter(item => item.children)

  return (
    <nav className={styles.menu__container}>
      <ul className={styles.menu}>
        {main_menu.map((item, index) => {
          return (
            <li className={styles.menu__item} key={index}>
              <a
                href={checkPath(item.page_slug || item.url)}
                target={item.target_blank ? '_blank' : '_self'}
                rel={item.target_blank ? 'noopener noreferrer' : undefined}>
                {item.title}
              </a>
              {item.children && item.children.length > 0 && (
                <ul className={styles.menu__dropdown}>
                  {item.children.map((item, index) => {
                    return (
                      <li className={styles.menu__item} key={index}>
                        <a
                          href={checkPath(item.page_slug || item.url)}
                          target={item.target_blank ? '_blank' : '_self'}
                          rel={item.target_blank ? 'noopener noreferrer' : undefined}>
                          {item.title}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
      {secondLevel.length > 0 && (
        <ul className={styles.menu}>
          {secondLevel.map(item => {
            return item.children?.map((child, index) => {
              return (
                <li className={styles.menu__item} key={index}>
                  <a
                    href={checkPath(child.page_slug || child.url)}
                    target={item.target_blank ? '_blank' : '_self'}
                    rel={item.target_blank ? 'noopener noreferrer' : undefined}>
                    {child.title}
                  </a>
                </li>
              )
            })
          })}
        </ul>
      )}
      <div className={styles.menu__dropdown_bg}></div>
    </nav>
  )
}
