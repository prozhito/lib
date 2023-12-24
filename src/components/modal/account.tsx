'use client'

import React from 'react'
import { FormInput, FormSubmit } from '../ui/form'
import { Button } from '../ui'
import styles from './.module.css'

import closeImg from '../../assets/close.svg'

type TFormLoginProps = {
  loading: boolean
  error: string
  user: Record<string, string> | null
  login: (data: Record<string, string>) => void
  logout: () => void
  visible: boolean
  closeModal: () => void
}

export const ModalAccount = ({ loading, error, user, login, logout, visible, closeModal }: TFormLoginProps) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.currentTarget)
    const data: Record<string, string> = {
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
    }
    console.log('Sending:', data)
    login(data)
    event.preventDefault()
  }

  const handleClick = (event: React.MouseEvent) => {
    if (!visible) return
    const { target, currentTarget } = event
    if (target === currentTarget) {
      event.preventDefault()
      closeModal()
    }
  }

  const killToken = () => {
    document.cookie = 'access= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
    if (typeof window != 'undefined') window.location.reload()
  }

  const info = () => {
    console.log(user)
  }

  return (
    <div className={visible ? styles.modal__outer : styles.modal__outer_hidden} onClick={handleClick}>
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__close} onClick={closeModal}>
          <img src={closeImg} alt={'close'} />
        </div>
        <div className={styles.modal__inner}>
          {!user && (
            <>
              <h1>Sign in</h1>
              <form onSubmit={submitHandler} style={{ width: '25rem', textAlign: 'center' }}>
                <FormInput type="email" name="email" placeholder={'email'} />
                <FormInput type="password" name="password" placeholder={'password'} />
                {error && <p>Error: {error}</p>}
                <FormSubmit disabled={loading}>Login</FormSubmit>
              </form>
            </>
          )}
          {user && (
            <>
              <h1>User info</h1>
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
          {/* <Button onClick={info}>Info</Button> */}
        </div>
      </div>
    </div>
  )
}
