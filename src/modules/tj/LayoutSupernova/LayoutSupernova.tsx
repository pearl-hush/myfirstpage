import React, { FC } from 'react'
import styles from './LayoutSupernova.css'

type LayoutSupernovaProps = {}
export const LayoutSupernova: FC<LayoutSupernovaProps> = ({ children }) => (
  <div className={ styles.layoutSupernova }>
    { children }
  </div>
)
