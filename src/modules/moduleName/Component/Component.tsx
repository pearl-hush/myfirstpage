import React, { FC } from 'react'
import styles from './Component.css'

type ComponentProps = {}
export const Component: FC<ComponentProps> = () => {
  return (
    <div className={ styles.component }>
      Component
    </div>
  )
}