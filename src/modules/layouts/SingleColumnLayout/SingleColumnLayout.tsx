import React, { FC } from 'react'
import styles from './SingleColumnLayout.css'

type SingleColumnLayoutProps = {}
export const SingleColumnLayout: FC<SingleColumnLayoutProps> = ({ children }) => {
  return (
      <div className={ styles.singleColumnLayout }>
          { children }
      </div>
  )
}