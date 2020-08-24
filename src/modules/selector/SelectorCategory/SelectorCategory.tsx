import React, { FC, useMemo } from 'react'
import styles from './SelectorCategory.css'

type SelectorCategoryProps = {
  title: string
  subtitle1: string
  subtitle2: string
  subtitle3: string
}
export const SelectorCategory: FC<SelectorCategoryProps> = ({ title, subtitle1, subtitle2, subtitle3 }) => {
  return (
    <div className={ styles.selectorCategory }>
      <div className={ styles.selectorTitle }>
        { title }
      </div>
      <div className={ styles.arrow } />
      <select className={ styles.selectorSubtitle } value='default'>
        <option value='default'>
          { subtitle1 }
        </option>
        <option value='value1'>
          { subtitle2 }
        </option>
        <option value='value2'>
          { subtitle3 }
        </option>
      </select>
    </div>
  )
}