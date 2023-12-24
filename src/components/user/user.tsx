'use client'

import React from 'react'
import { AccountConsumer } from '../../api/account'
import { useAccount } from '../../api/account/hooks/useAccount'
import { FormLogin } from '../modal/login'
import { Modal } from '../modal'
import { createPortal } from 'react-dom'

import styles from './.module.css'
import defaultUser from '../../assets/user.svg'

type TUserMenuProps = {
  user_data?: {
    user?: Record<string, string>
    error?: string
  }
}

export const UserMenu = ({ user_data }: TUserMenuProps) => {
  const [domLoaded, setDomLoaded] = React.useState(false)
  const [loginVisible, setLoginVisible] = React.useState(false)
  const { loading, error, user, setUser, login, logout } = useAccount()
  console.log('loading:', loading)
  console.log('error:', error)
  console.log('user:', user)

  React.useEffect(() => {
    if (user_data && user_data.user) setUser(user_data.user)
    setDomLoaded(true)
  }, [])

  return (
    <>
      <div className={styles.user__menu} onClick={() => setLoginVisible(true)}>
        <img src={defaultUser} />
      </div>

      {typeof window !== 'undefined' &&
        domLoaded &&
        createPortal(
          <FormLogin {...{ loading, error, user, login, logout, visible: loginVisible, closeModal: () => setLoginVisible(false) }} />,
          document.body
        )}
    </>
  )
}

/* 
'use client'
import Router from 'next/navigation'
import { FormLogin } from '../ui'
import { Button } from '../ui'
import { useAccount } from '~/hooks/useAccount'
import styles from './.module.css'

export const TempUser = () => {
  const { loading, error, user, login, logout } = useAccount()

  const killToken = () => {
    document.cookie = 'access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
    Router.redirect('/')
  }

  const info = () => {
    console.log(user)
  }

  return (
    <>
      {!user && <FormLogin {...{ loading, error, login }} />}
      {user && (
        <>
          <div className={styles.user__info_container} style={{ width: '25rem' }}>
            {Object.entries(user).map(([key, val]) => (
              <p key={key}>
                {key}: {val}
              </p>
            ))}
          </div>
          <Button onClick={logout}>Log out</Button>
          <Button onClick={killToken}>Kill token</Button>
        </>
      )}
      <Button onClick={info}>info</Button>
    </>
  )
}
 */
