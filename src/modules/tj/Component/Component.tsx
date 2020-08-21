import React, { FC } from 'react'
import styles from './Component.css'

type ComponentProps = {}
export const Component: FC<ComponentProps> = () => (
  <div className={ styles.component }>
    Hi, I'm Component
  </div>
)
