import React, { FC } from 'react'
import styles, { blockSwiper } from './BlockSwiper.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faComment, faBookmark } from '@fortawesome/free-solid-svg-icons'

type BlockSwiperProps = {}
export const BlockSwiper: FC<BlockSwiperProps> = () => (
  <a className={ styles.blockSwiper } href='https://journal.tinkoff.ru/reality-show-vesna-3/'>
    <div className={ styles.blockImage } />
    <div className={ styles.blockText }>
      Как живет научный сотрудник в Москве с общим доходом семьи 350 000 ₽ в месяц
    </div>
    <div className={ styles.blockSummary }>
      <div className={ styles.blockDate }>
        17.07
      </div>
      <div className={ styles.blockViews }>
        <span className={ styles.icon }>
          <FontAwesomeIcon icon={ faEye } />
        </span>
        630k
      </div>
      <div className={ styles.blockComments }>
        <span className={ styles.icon }>
          <FontAwesomeIcon icon={ faComment } />
        </span>
        1890
      </div>
      <div className={ styles.blockFav }>
        <span className={ styles.icon }>
          <FontAwesomeIcon icon={ faBookmark } />
        </span>
        79
      </div>
    </div>
  </a>
)
