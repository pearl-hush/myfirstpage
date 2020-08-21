import React, { FC, ReactNode } from 'react'
import styles from './Paragraph.css'

type ParagraphProps = {
  right?: ReactNode
}
export const Paragraph: FC<ParagraphProps> = ({ children, right }) => (
  <div className={ styles.paragraph }>
    <div className={ styles.left }>
      { children }

    </div>
    <div className={ styles.right }>
      { right }
    </div>
  </div>
)
