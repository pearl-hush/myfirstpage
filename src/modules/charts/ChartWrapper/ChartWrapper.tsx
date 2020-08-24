import React, { FC } from 'react'
import styles from './ChartWrapper.css'
import { ChartHeader } from '../ChartHeader/ChartHeader'

type ChartWrapperProps = {
  subtitle?: string
}
export const ChartWrapper: FC<ChartWrapperProps> = ({ children, subtitle }) => {
  return (
    <div className={ styles.chartWrapper }>
      <ChartHeader subtitle={ subtitle }>
        { children }
      </ChartHeader>
      <div className={ styles.chartBlock }>

      </div>
    </div>
  )
}