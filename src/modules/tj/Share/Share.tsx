import React, { FC } from 'react'
import styles from './Share.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVk, faFacebook, faTwitter, faOdnoklassniki, faTelegramPlane, faPinterest } from '@fortawesome/free-brands-svg-icons'

type ShareProps = {}
export const Share: FC<ShareProps> = () => (
  <div className={ styles.share }>
    <a className={ styles.sm } href="https://journal.tinkoff.ru/austria/">
      <FontAwesomeIcon icon={ faVk } />
    </a>
    <a className={ styles.sm } href="https://journal.tinkoff.ru/austria/">
      <FontAwesomeIcon icon={ faFacebook } />
      {/* <i class="fa fa-facebook-f"></i> */}
    </a>
    <a className={ styles.sm } href="https://journal.tinkoff.ru/austria/">
      <FontAwesomeIcon icon={ faTwitter } />
      {/* <i class="fa fa-twitter"></i> */}
    </a>
    <a className={ styles.sm } href="https://journal.tinkoff.ru/austria/">
     <FontAwesomeIcon icon={ faTelegramPlane } />
      {/* <i class="fa fa-odnoklassniki"></i> */}
    </a>
    <a className={ styles.sm } href="https://journal.tinkoff.ru/austria/">
     <FontAwesomeIcon icon={ faOdnoklassniki } />
      {/* <i class="fa fa-odnoklassniki"></i> */}
    </a>
    <a className={ styles.sm } href="https://journal.tinkoff.ru/austria/">
      <FontAwesomeIcon icon={ faPinterest } />
      {/* <i class="fa fa-pinterest"></i> */}
    </a>
  </div>
)
