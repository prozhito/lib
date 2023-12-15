'use client'
import React from 'react'
import styles from './.module.css'

import openImg from '../../assets/menu.svg'
import closeImg from '../../assets/close.svg'

const menuSwitch = (show: boolean) => {
  const nav = document.querySelector('nav')
  if (nav) {
    nav.classList.toggle(styles.menu_open, show)

    const parts = [nav.children[0], nav.children[1]] as HTMLUListElement[]
    parts.forEach(menu => {
      if (show) menu.style.display = 'flex'
      else menu.removeAttribute('style')
    })

    if (show) nav.addEventListener('click', menuClickHandler)
    else nav.removeEventListener('click', menuClickHandler)

    if (show) {
      const mediaQuery = window.matchMedia('(max-width: 800px)')
      mediaQuery.addEventListener('change', handleTabletChange)
    }
  }

  const menu_button = document.getElementById('menu_button')
  if (menu_button) {
    const img = menu_button.firstElementChild as HTMLImageElement
    if (img) img.src = show ? closeImg : openImg
  }
}

const handleTabletChange = (event: MediaQueryListEvent) => {
  if (!event.matches) {
    const mq = event.currentTarget
    if (mq && mq instanceof MediaQueryList) mq.removeEventListener('change', handleTabletChange)
    menuSwitch(false)
  }
}

const menuClickHandler = () => {
  menuSwitch(false)
}

const buttonClickHandler = () => {
  const nav = document.querySelector('nav')
  const isOpen = nav?.classList.contains(styles.menu_open)
  menuSwitch(!isOpen)
}

export const MenuButton = () => (
  <div id="menu_button" className={styles.menu__button} onClick={buttonClickHandler}>
    <img src={openImg} alt="menu" />
  </div>
)
