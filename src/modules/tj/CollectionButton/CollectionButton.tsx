import React, { FC } from 'react'
import styles from './CollectionButton.css'

type CollectionButtonProps = {
  link: string
}
export const CollectionButton: FC<CollectionButtonProps> = ({ children, link }) => (
  <a className={ styles.collectionButton } href={ link }>
      { children }
  </a>
)
