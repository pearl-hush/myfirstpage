import React, { FC } from 'react'
import styles from './CollectionWrapper.css'

type CollectionWrapperProps = {}
export const CollectionWrapper: FC<CollectionWrapperProps> = ({ children }) => (
  <div className={ styles.collectionWrapper }>
    { children }
  </div>
)
