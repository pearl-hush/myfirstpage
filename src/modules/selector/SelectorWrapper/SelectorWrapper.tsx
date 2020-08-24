import React, { FC } from 'react'
import styles from './SelectorWrapper.css'
import { SelectorCategory } from '../SelectorCategory/SelectorCategory'

type SelectorWrapperProps = {}
export const SelectorWrapper: FC<SelectorWrapperProps> = () => {
  return (
    <div className={ styles.selectorWrapper }>
      <SelectorCategory
        title='Spending Category'
        subtitle1='Withdrawals & Checks'
        subtitle2='Auto & Gas'
        subtitle3='Education'
      />
      <SelectorCategory
        title='Location'
        subtitle1='All States'
        subtitle2='Alabama'
        subtitle3='California'
      />
      <SelectorCategory
        title='Income Range'
        subtitle1='Any Income'
        subtitle2='$40k - $120k'
        subtitle3='Above $120k'
      />
    </div>
  )
}