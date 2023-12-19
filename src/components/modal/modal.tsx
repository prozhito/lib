'use client'

import React from 'react'
import styles from './.module.css'

import closeImg from '../../assets/close.svg'

type TModal = () => React.JSX.Element
interface IModal extends TModal {
  Show: (children: React.ReactNode) => void
}
type TState = { visible: boolean; children: React.ReactNode | null }

export const Modal: IModal = (() => {
  const func: { [k in string | symbol]: React.Dispatch<React.SetStateAction<TState>> } = {}

  const modal = () => {
    const [state, setState] = React.useState<TState>({ visible: false, children: null })
    func.setState = setState

    const handleClick = (event: React.MouseEvent) => {
      event.preventDefault()
      if (!state.visible) return
      const { target, currentTarget } = event
      if (target === currentTarget) closeModal()
    }

    const closeModal = () => setState(prev => ({ ...prev, visible: false }))

    return (
      <div className={state.visible ? styles.modal__outer : styles.modal__outer_hidden} onClick={handleClick}>
        <div className={styles.modal__wrapper}>
          <div className={styles.modal__close} onClick={closeModal}>
            <img src={closeImg} alt={'close'} />
          </div>
          <div className={styles.modal__inner}>{state.children}</div>
        </div>
      </div>
    )
  }

  modal.Show = (children: React.ReactNode) => {
    func.setState({ visible: true, children })
  }

  return modal
})()
