import React, { FC } from 'react'
import styles from './CommentsTreeHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'

type CommentsTreeHeaderProps = {}
export const CommentsTreeHeader: FC<CommentsTreeHeaderProps> = () => (
  <div className={ styles.commentsTreeHeader }>
    <a className={ styles.commentsSummary } href="https://journal.tinkoff.ru/austria/">
      <span className={ styles.commentsIcon }>
        <FontAwesomeIcon icon={ faComment } />
      </span>
      399
    </a>
    <div className={ styles.commentsSort }>
      <a className={ styles.commentsSortRating } href="https://journal.tinkoff.ru/austria/">
        По рейтингу
      </a>
      <a className={ styles.commentsSortOrder } href="https://journal.tinkoff.ru/austria/">
        По порядку
      </a>
    </div>
  </div>
)
