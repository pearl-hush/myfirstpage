import React, { FC } from 'react'
import styles from './CollectionHeader.css'

type CollectionHeaderProps = {}
export const CollectionHeader: FC<CollectionHeaderProps> = ({ children }) => (
  <div className={ styles.collectionHeader }>
    <div className={ styles.collectionTitle }>
      { children }
      <button className={ styles.moreArticles }>
        См. все
      </button>
    </div>
  </div>
)
