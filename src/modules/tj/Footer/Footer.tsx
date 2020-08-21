import React, { FC } from 'react'
import styles from './Footer.css'

type FooterProps = {}
export const Footer: FC<FooterProps> = () => (
  <div className={ styles.footer }>
    <div className={ styles.bigLogo } />
    <div className={ styles.topics }>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Деньги
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Путешествия
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Сбережения
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Права
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Бизнес
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Кредиты
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Калькулятор
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Города
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Герои
      </a>
      <a className={ styles.topic } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
        Написать
      </a>
    </div>
    <div className={ styles.socialMedia }>
      <a className={ `${ styles.share } ${ styles.telegram }` } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/' />
      <a className={ `${ styles.share } ${ styles.ok }` } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/' />
      <a className={ `${ styles.share } ${ styles.instagram }` } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/' />
      <a className={ `${ styles.share } ${ styles.vk }` } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/' />
      <a className={ `${ styles.share } ${ styles.fb }` } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/' />
    </div>
    <div className={ styles.bottom }>
      <div className={ styles.left }>
        <a className={ styles.logo } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/' />
        <a className={ styles.company } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
          <div className={ styles.title }>
            АО «Мой Сайт»
          </div>
          <div className={ styles.subtitle }>
            лицензия № 2673
          </div>
        </a>
      </div>
      <div className={ styles.middle }>
        <a className={ styles.about } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
          journal@tinkoff.ru
        </a>
        <div className={ styles.top }>
          <a className={ styles.about } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
            О проекте
          </a>
          ·
          <a className={ styles.about } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
            Вакансии
          </a>
        </div>
      </div>
      <div className={ styles.right }>
        <a className={ styles.about } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
          Правила пользования сайтом
        </a>
        <a className={ styles.about } href='https://journal.tinkoff.ru/discuss/kak-tam-s-dengami/'>
          Выйти
        </a>
      </div>
    </div>
  </div>
)
