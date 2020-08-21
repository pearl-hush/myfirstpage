import React, { FC } from 'react'
import styles from './PageMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'

type PageMenuProps = {}
export const PageMenu: FC<PageMenuProps> = () => (
  <div className={ styles.layoutTop }>
    <div className={ styles.topMain }>
      <div className={ styles.leftTop }>
        М – С
      </div>
      <div className={ styles.rightTop }>
        <div className={ styles.searchTop }>
          <button className={ styles.searchClick }>
            <span className={ styles.iconTags }>
              <FontAwesomeIcon icon={ faSearch } />
            </span>
            ПОИСК
          </button>
        </div>
        <div className={ styles.searchInputTop }>
          <span className={ styles.iconTags }>
            <FontAwesomeIcon icon={ faSearch } />
          </span>
          <input className={ styles.input } type='text' placeholder='ПОИСК' />
          <span className={ styles.iconTags }>
            <FontAwesomeIcon icon={ faTimes } />
          </span>
          <div className={ styles.suggests }>
            <div className={ styles.suggest }>вклад</div>
            <div className={ styles.suggest }>налоговый вычет</div>
            <div className={ styles.suggest }>ипотека</div>
            <div className={ styles.suggest }>кредитная история</div>
            <div className={ styles.suggest }>дневники трат</div>
          </div>
        </div>
        <div className={ styles.newsletterTop }>
          <button className={ styles.subscribe }>
            <span className={ styles.iconTags }>
              <FontAwesomeIcon icon={ faEnvelopeOpen } />
            </span>
            РАССЫЛКА
          </button>
        </div>
        <div>
          <button className={ styles.login }>ВОЙТИ</button>
        </div>
      </div>
    </div> 
    <div className={ styles.topNames }>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Деньги</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Путешествия</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Сбережения</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Права</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Бизнес</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Кредиты</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Калькулятор</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Города</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Герои</div>
      </a>
      <a href='https://journal.tinkoff.ru/austria/'>
        <div className={ styles.headings }>Написать</div>
      </a>
    </div>
  </div>
)
