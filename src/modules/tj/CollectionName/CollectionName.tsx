import React, { FC, ReactNode } from 'react'
import styles from './CollectionName.css'

type CollectionNameProps = {
  image: string
  counter: ReactNode
  link: string
}
export const CollectionName: FC<CollectionNameProps> = ({ image, children, counter, link}) => (
  <a className={ styles.collectionName } href={ link }>
    <div 
      className={ styles.collectionPicture } 
      style={{
        'backgroundImage': `url('${ image }')`
      }}
    />
    <div className={ styles.collectionText }>
      <div className={ styles.collectionTitle }>
        { children }
      </div>
      <div className={ styles.articleCounter }>
        { counter }
      </div>
    </div>
  </a>
)
