import React, { FC } from 'react'
import styles from './Tags.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBookmark } from '@fortawesome/free-solid-svg-icons'

type TagsProps = {}
export const Tags: FC<TagsProps> = () => (
  <div className={ styles.tags }>
    <a className={ styles.tagsFav } href="https://journal.tinkoff.ru/austria/">
      <span className={ styles.iconTags }>
        <FontAwesomeIcon icon={ faBookmark } />
      </span>
        798
    </a>
    <div className={ styles.tagsSummary }>
      <div className={ styles.summary }>03.08</div>
      <div className={ styles.summary }>
        <span className={ styles.iconTags }>
          <FontAwesomeIcon icon={ faEye } />
        </span>
        255K
      </div>
      <div className={ styles.tagsTopics }>
        Тэги: 
        <a className={ styles.topic } href="https://journal.tinkoff.ru/austria/">
          бюджет
        </a>
        , 
        <a className={ styles.topic } href="https://journal.tinkoff.ru/austria/">
          траты
        </a>
        , 
        <a className={ styles.topic } href="https://journal.tinkoff.ru/austria/">
          работа
        </a>
      </div>
    </div>
  </div>
)
