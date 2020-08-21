import React, { FC } from 'react'
import styles from './CollectionLine.css'

type CollectionLineProps = {
  link: string
}
export const CollectionLine: FC<CollectionLineProps> = ({ children, link }) => (
  <div className={ styles.lineWrapper }>
    <a className={ styles.collectionLine } href={ link }>
      { children }
    </a>
  </div>
)
