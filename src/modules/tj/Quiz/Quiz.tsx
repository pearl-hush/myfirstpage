import React, { FC } from 'react'
import styles from './Quiz.css'

type QuizProps = {}
export const Quiz: FC<QuizProps> = ({ children }) => (
  <div className={ styles.quiz }>
    <div className={ styles.quizTitle }>
        { children }
      </div>
      <div className={ styles.quizSubtitle }>
        Голосуйте честно
      </div>
      <div className={ styles.choice }>
        😎 Деньги давайте, а там разберемся
      </div>
      <div className={ styles.choice }>
        🥰 Нет, люблю свою незамысловатую жизнь
      </div>
      <div className={ styles.choice }>
        🧐 Просто хочу взглянуть на результат
      </div>
  </div>
)
