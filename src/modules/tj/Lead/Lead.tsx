import React, { FC } from 'react'
import styles from './Lead.css'

type LeadProps = {}
export const Lead: FC<LeadProps> = ({ children }) => (
  <div className={ styles.lead }>
    { children }
  </div>
)
