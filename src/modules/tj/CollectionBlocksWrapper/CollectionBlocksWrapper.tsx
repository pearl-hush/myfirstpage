import React, { FC } from 'react'
import styles from './CollectionBlocksWrapper.css'

type CollectionBlocksWrapperProps = {}
export const CollectionBlocksWrapper: FC<CollectionBlocksWrapperProps> = ({ children }) => (
  <div className={ styles.collectionBlocksWrapper }>
    { children }
  </div>
)
