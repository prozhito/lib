import React, { FC } from 'react'
import { TFormInputProps } from './types'
import styles from './.module.css'

export const FormInput: FC<TFormInputProps> = ({ name, type, placeholder, onChange, errorMessage, error }) => {
  return (
    <div className={styles.form__input_container}>
      <input className={styles.form__input} type={type} name={name} id={`form_${name}`} placeholder={''} onChange={onChange} maxLength={28} />
      <label className={styles.form__input_label} htmlFor={`form_${name}`}>
        {placeholder}
      </label>
    </div>
  )
}
