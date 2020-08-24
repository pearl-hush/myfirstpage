import React, { FC } from 'react'
import styles from './FooterUnauthorized.css'
import { SubscribeButton } from '../../buttons/SubscribeButton/SubscribeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

type FooterUnauthorizedProps = {}
export const FooterUnauthorized: FC<FooterUnauthorizedProps> = () => {
  return (
    <div className={ styles.footerUnauthorized }>
      <h1 className={ styles.title }>
        Join our growing community today.
      </h1>
      <div className={ styles.buttonWrapper }>
        <SubscribeButton />
      </div>
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
          COVID-19
        </a>
      </div>
      <div className={ styles.mobileApps }>
        <a className={ ` ${styles.ios} ${ styles.app } ` } href='https://itunes.apple.com/us/app/status-money-financial-manager/id1427699722?mt=8'></a>
        <a className={ ` ${styles.android} ${ styles.app } ` } href='https://play.google.com/store/apps/details?id=com.statusmoney'></a>
      </div>
      <div className={ styles.socialMedia }>
      <a className={ ` ${ styles.sm } ${ styles.icon } ` } href='https://www.facebook.com/StatusMoneyUSA'>
          <FontAwesomeIcon icon={ faFacebookF } />
        </a>
        <a className={ ` ${ styles.sm } ${ styles.icon } `  } href='https://twitter.com/StatusMoneyUSA'>
          <FontAwesomeIcon icon={ faTwitter } />
        </a>
        <a className={ ` ${ styles.sm } ${ styles.icon } `  } href='https://www.linkedin.com/company/24428849/'>
          <FontAwesomeIcon icon={ faLinkedinIn } />
        </a>
      </div>
      <div className={ styles.press }>
        <a className={ styles.pressTopic } href='https://statusmoney.com/'>
          Press
        </a>
        <a className={ styles.pressTopic } href='https://statusmoney.com/'>
          Privacy
        </a>
        <a className={ styles.pressTopic } href='https://statusmoney.com/'>
          Terms
        </a>
      </div>
    </div>
  )
}