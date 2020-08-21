import React, { FC } from 'react'
import styles from './Search.css'

type SearchProps = {}
export const Search: FC<SearchProps> = () => (
  <div className={ styles.search }>
    Hi, I'm Search
  </div>
)
