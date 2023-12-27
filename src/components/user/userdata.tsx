'use client'
import React from 'react'
import { useUser } from '../../api/account'

export const UserData = () => {
  const user = useUser()

  // return JSON.stringify(user)
  return user ? (
    Object.keys(user).map(key => (
      <p key={key}>
        {key}: {user[key]}
      </p>
    ))
  ) : (
    <p>No data</p>
  )
}
