import React from 'react'

import styles from './.module.css'
import defaultUser from '../../assets/user.svg'

export const UserMenu = () => {
  return (
    <div className={styles.user__menu}>
      <img src={defaultUser} />
    </div>
  )
}
