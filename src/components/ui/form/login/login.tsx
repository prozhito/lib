'use client'

import React from 'react'
import { FormInput, FormSubmit } from '..'

export const FormLogin = ({ loading, error, login }: { loading: boolean; error: string; login: (data: Record<string, string>) => void }) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('click')
    event.preventDefault()
    const form = new FormData(event.target as HTMLFormElement)
    const data: Record<string, string> = { email: '', password: '' }
    for (const [key, value] of Object.entries(form)) {
      data[key] = String(value)
    }
    console.log('Sending:', data)
    // login(data)
  }

  return (
    <form onSubmit={submitHandler} style={{ width: '25rem', textAlign: 'center' }}>
      <FormInput type="text" name="email" placeholder={'email'} />
      <FormInput type="password" name="password" placeholder={'password'} />
      {error && <p>Error: {error}</p>}
      <FormSubmit disabled={loading}>Login</FormSubmit>
    </form>
  )
}
