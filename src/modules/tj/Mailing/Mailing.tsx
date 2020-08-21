import React, { FC, ReactNode } from 'react'
import styles from './Mailing.css'

type MailingProps = {
  title: string
  subtitle: string
}
export const Mailing: FC<MailingProps> = ({ title, subtitle }) => (
  <div className={ styles.mailing }>
    <div className={ styles.mailingForm }>
      <div className={ styles.formHeader }>
        <div className={ styles.formTitle }>
          { title }
        </div>
        <div className={ styles.formSubtitle }>
          { subtitle }
        </div>
      </div>
      <div className={ styles.formInput }>
        <input className={ styles.formEmail } type='text' placeholder='Электронная почта' />
        <button className={ styles.formSend }>
          Подписаться
        </button>
      </div>
    </div>
    <div className={ styles.mailingImage }></div>
  </div>
)
