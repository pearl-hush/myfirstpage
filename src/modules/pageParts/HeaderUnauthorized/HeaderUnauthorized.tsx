import React, { FC } from 'react'
import styles from './HeaderUnauthorized.css'
import { LoginButton } from '../../buttons/LoginButton/LoginButton'
import { SubscribeButton } from '../../buttons/SubscribeButton/SubscribeButton'

type HeaderUnauthorizedProps = {}
export const HeaderUnauthorized: FC<HeaderUnauthorizedProps> = () => {
  return (
    <div className={ styles.headerUnauthorized }>
      <div className={ styles.left }>
        <div className={ styles.logoMacbook }></div>
      </div>
      <div className={ styles.right }>
        <div className={ styles.topics }>
          <a className={ styles.topic } href='https://statusmoney.com/'>
            About
          </a>
          <a className={ styles.topic } href='https://statusmoney.com/'>
            FAQ
          </a>
          <a className={ styles.topic } href='https://statusmoney.com/'>
            Security
          </a>
          <a className={ styles.topic } href='https://statusmoney.com/'>
            Offers
          </a>
          <a className={ `${ styles.topic } ${ styles.topicCovid }` } href='https://statusmoney.com/'>
            COVID-19
          </a>
        </div>
        <LoginButton />
        <SubscribeButton />
      </div>
    </div>
  )
}
