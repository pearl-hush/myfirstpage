import React, { FC } from 'react'
import styles from './LoginButton.css'

type LoginButtonProps = {}
export const LoginButton: FC<LoginButtonProps> = () => {
  return (
    <a className={ styles.loginButton } href='https://statusmoney.com/'>
      Log In
    </a>
  )
}