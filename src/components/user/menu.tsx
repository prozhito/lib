'use client'

import React from 'react'
import { useAccount } from '../../api/account/hooks/useAccount'
import { ModalAccount } from '../modal'
import { createPortal } from 'react-dom'

import styles from './.module.css'
import defaultUser from '../../assets/user.svg'

function getInitials(user: Record<string, string>) {
  return `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
}

type TUserMenuProps = {
  user_data?: {
    user?: Record<string, string>
    error?: string
  }
}

export const UserMenu = ({ user_data }: TUserMenuProps) => {
  const [domLoaded, setDomLoaded] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)
  const { loading, error, user, setUser, login, logout } = useAccount()
  /*
  console.log('loading:', loading)
  console.log('error:', error)
  console.log('user:', user)
 */
  React.useEffect(() => {
    if (user_data && user_data.user) setUser(user_data.user)
    setDomLoaded(true)
  }, [])

  return (
    <>
      <div className={styles.user__menu} onClick={() => setModalVisible(true)}>
        {user ? getInitials(user) : <img src={defaultUser} />}
      </div>

      {typeof window !== 'undefined' &&
        domLoaded &&
        createPortal(
          <ModalAccount {...{ loading, error, user, login, logout, visible: modalVisible, closeModal: () => setModalVisible(false) }} />,
          document.body
        )}
    </>
  )
}
