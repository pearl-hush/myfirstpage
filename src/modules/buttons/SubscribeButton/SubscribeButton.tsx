import React, { FC } from 'react'
import styles from './SubscribeButton.css'

type SubscribeButtonProps = {}
export const SubscribeButton: FC<SubscribeButtonProps> = () => {
  return (
    <a className={ styles.subscribeButton } href='https://statusmoney.com/'>
    <div className={ styles.joinStatus }>
      join status
    </div>
    <div className={ styles.earn }>
      Earn $5 Reward
    </div>
  </a>
  )
}