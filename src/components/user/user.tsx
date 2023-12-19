'use client'

import React from 'react'
import { FormLogin } from '../ui'
import { Modal } from '../modal'

import styles from './.module.css'
import defaultUser from '../../assets/user.svg'

export const UserMenu = () => {
  const { loading, error, user, login, logout } = {
    loading: false,
    error: '',
    user: null,
    login: () => {},
    logout: () => {},
  }

  return (
    <>
      <div
        className={styles.user__menu}
        onClick={() =>
          Modal.Show(
            <>
              <h1>Sign in</h1>
              <FormLogin {...{ loading, error, login }} />
            </>
          )
        }>
        <img src={defaultUser} />
      </div>
      <Modal />
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
