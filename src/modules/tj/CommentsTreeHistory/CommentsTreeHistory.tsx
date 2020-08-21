import React, { FC } from 'react'
import styles from './CommentsTreeHistory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

type CommentsTreeHistoryProps = {}
export const CommentsTreeHistory: FC<CommentsTreeHistoryProps> = () => (
  <div className={ styles.commentsTreeHistory }>
    <div className={ styles.commentsTreeHistoryHeader }>
      <div className={ styles.commentsTreeHistoryImage }></div>
      <div className={ styles.commentsTreeHistoryMain }>
        <div className={ styles.commentsTreeHistoryName }>
          Коала Кокаколова
        </div>
        <div className={ styles.commentsTreeHistoryPost }>
          Редактор М-С
        </div>
        <div className={ styles.commentsTreeHistoryDate }>
          03.08, 12:36
        </div>
      </div>
    </div>
    <div>
      <div className={ styles.commentsTreeHistoryBodyText }>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
          Как человек с семизначными доходами не соглашусь с вами. Точнее соглашусь но не полностью.
        </div>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
          Насчёт медицины крайне с вами не согласен. Платная медицина в России действительно заслуживает уважения. Если для вас это не так, то рекомендую сменить мед учреждение.
        </div>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
          Про отжатие бизнеса тоже неверно. Пока у вас не будет серьезных оборотов в бизнесе(от ярда), вы никому тут не нужны и никто вас не будет трогать. Это придумали бедные чтобы оправдывать свое сидение на диване. Это ведь проще чем что то делать.
        </div>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
          Про менталитет людей, которые зарабатывают 15-80тыс. Соглашусь. Это крайне токсичные люди. За спиной такие люди обычно поливают грязью, а в лицо нагло улыбаются. Для таких ты всегда будешь либо вором капиталистом, либо белой вороной. И неважно что ты не чиновник. Это никого не волнует.
        </div>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
          И опять же, попробуй объяснить бедному москвичу, который зарабатывает 80тыс то, что он бедный, и что он виноват в этом только САМ.
        </div>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
        Это утопия. Ибо человек придумает тысячу отмазок начиная от государства заканчивая людей вокруг. Убедит себя что он неплохо зарабатывает и что большие деньги это плохо.
        </div>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
          Поэтому лучше всего держаться таких подальше.
        </div>
        <div className={ styles.commentsTreeHistoryBodyTextLine }>
          Что касаемо продуктов - тут тоже не вижу проблем. Всеми известные магазины с фермерскими продуктами имеют отличное качество (как правило).
        </div>
        <div className={ styles.commentsTreeHistoryBodyReplyLike }>
          <div className={ styles.commentsTreeWrap }>
            <div className={ `${ styles.commentsTreeHistoryBodyReply } ${ styles.space }` }>
              Ответить
            </div>
            <div className={ styles.commentsLikesWrap }>
              <div className={ `${ styles.commentsTreeHistoryBodyLike } ${ styles.space }` }>
                <FontAwesomeIcon icon={ faThumbsUp } />
              </div>
              <div className={ `${ styles.commentsTreeHistoryBodyLikeCount } ${ styles.space }` }>
                1098
              </div>
              <div className={ styles.commentsTreeHistoryBodyDislike }>
                <FontAwesomeIcon icon={ faThumbsDown } />
              </div>
              <div className={ styles.commentsTreeOverviewCard }>
                <div className={ styles.theCard }>
                  <div className={ styles.theCardPositive }>+680</div>
                  <div className={ styles.theCardNegative }>–418</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
