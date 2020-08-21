import React, { FC, ReactNode } from 'react'
import styles from './Author.css'

type AuthorProps = {
  summary: ReactNode
}
export const Author: FC<AuthorProps> = ({ children, summary }) => (
  <div className={ styles.author }>
    <img className={ styles.authorImage } src="https://pbs.twimg.com/profile_images/1264294876495167488/Xh4h234Y_400x400.jpg" />
    <div className={ styles.authorName }>{ children }</div>
    <div className={ styles.authorSummary }>{ summary }</div>
  </div>
)
