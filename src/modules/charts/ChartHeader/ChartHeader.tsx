import React, { FC } from 'react'
import styles from './ChartHeader.css'

type ChartHeaderProps = {
  subtitle?: string
}
export const ChartHeader: FC<ChartHeaderProps> = ({ children, subtitle }) => {
  return (
    <div className={ styles.chartHeader }>
      { children }
      <div className={ styles.chartSubtitle }>
        { subtitle }
      </div>
    </div>
  )
}