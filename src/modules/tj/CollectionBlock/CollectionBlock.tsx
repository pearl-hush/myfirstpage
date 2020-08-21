import React, { FC } from 'react'
import styles from './CollectionBlock.css'

type CollectionBlockProps = {}
export const CollectionBlock: FC<CollectionBlockProps> = ({ children }) => (
  <div className={ styles.collectionBlock }>
    { children }
  </div>
)
