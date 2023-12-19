import React from 'react'
import { ExternalLink } from '../links'
import type { TMainMenu } from '../../api/context/types'

import styles from './.module.css'

export const HeaderMenu = ({ main_menu }: { main_menu: TMainMenu[] }) => {
  const secondLevel = main_menu.filter(item => item.children)

  return (
    <nav className={styles.menu__container}>
      <ul className={styles.menu}>
        {main_menu.map((item, index) => {
          return (
            <li className={styles.menu__item} key={index}>
              <ExternalLink url={(item.page_slug || item.url) ?? '#'} target_blank={item.target_blank}>
                {item.title}
              </ExternalLink>
              {item.children && item.children.length > 0 && (
                <ul className={styles.menu__dropdown}>
                  {item.children.map((item, index) => {
                    return (
                      <li className={styles.menu__item} key={index}>
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
      {secondLevel.length > 0 && (
        <ul className={styles.menu}>
          {secondLevel.map(item => {
            return item.children?.map((child, index) => {
              return (
                <li className={styles.menu__item} key={index}>
                  <ExternalLink url={(child.page_slug || child.url) ?? '#'} target_blank={item.target_blank}>
                    {child.title}
                  </ExternalLink>
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
