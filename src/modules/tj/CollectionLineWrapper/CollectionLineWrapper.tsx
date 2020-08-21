import React, { FC } from 'react'
import styles from './CollectionLineWrapper.css'

type CollectionLineWrapperProps = {}
export const CollectionLineWrapper: FC<CollectionLineWrapperProps> = ({ children }) => (
  <div className={ styles.collectionLineWrapper }>
    { children }
  </div>
)
