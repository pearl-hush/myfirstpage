import React, { FC } from 'react'
import styles from './ArticleHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'

type ArticleHeaderProps = {}
export const ArticleHeader: FC<ArticleHeaderProps> = ({ children }) => (
  <div className={ styles.articleHeader }>
    <div className={ styles.articleSummary }>
      <a className={ `${ styles.topicLink } ${ styles.summary }` } href="https://journal.tinkoff.ru/austria/">
        Дискуссия
      </a>
      <div className={ styles.summary }>03.08</div>
      <div className={ styles.summary }>
        <span className={ styles.icon }>
          <FontAwesomeIcon icon={ faEye } />
        </span>
        255K
      </div>
      <a className={ styles.summary } href="https://journal.tinkoff.ru/austria/">
        <span className={ styles.icon }>
          <FontAwesomeIcon icon={ faComment } />
        </span>
        399
      </a>
      <div className={ styles.summary }>
        <span className={ styles.icon }>
          <FontAwesomeIcon icon={ faBookmark } />
        </span>
        798
      </div>
    </div>
    <h1 className={ styles.h1 }>
      { children }
    </h1>
  </div>
)
