import React from 'react'
import styles from './.module.css'

export const FormSubmit = ({ children, disabled }: { children: string; disabled: boolean }) => {
  return (
    <button className={styles.form__submit} type="submit" disabled={disabled}>
      {disabled ? 'Loading...' : children}
    </button>
  )
}
