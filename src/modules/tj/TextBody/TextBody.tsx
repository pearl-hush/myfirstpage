import React, { FC } from 'react'
import styles from './TextBody.css'

type TextBodyProps = {}
export const TextBody: FC<TextBodyProps> = ({ children }) => (
  <div className={ styles.textBody }>
    { children }
  </div>
)
