import React, { FC } from 'react'
import styles from './WriteComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

type WriteCommentProps = {}
export const WriteComment: FC<WriteCommentProps> = () => (
  <div className={ styles.writeComment }>
    <div className={ styles.commentsHeader }>
      <img className={ styles.headerImage } src="https://pbs.twimg.com/profile_images/1264294876495167488/Xh4h234Y_400x400.jpg" />
      <div className={ styles.headerTitle }>
        <div className={ styles.titleMain }>
          <div className={ styles.titleName }>Редакция</div>
          <div className={ styles.titleDate }>03.08, 12:31</div>
        </div>
        <div className={ styles.titleTopic }>Стоит ли тратить жизнь на то, чтобы разбогатеть?</div>
      </div>
    </div>
    <div className={ styles.commentsBody }>
      <div className={ styles.sendComment }>
        <textarea className={ styles.commBody } placeholder="Ваш ответ"></textarea>
        <div className={ styles.commBodyIcon }>
          {/* <i className="fa fa-image"></i> */}
          <FontAwesomeIcon icon={ faImage } />
        </div>
      </div>
    </div>
  </div>
)
