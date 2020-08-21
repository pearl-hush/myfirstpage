import React, { FC, Children } from 'react'
import styles from './CommentReply.css'

type CommentReplyProps = {}
export const CommentReply: FC<CommentReplyProps> = ({ children }) => (
  <div className={ styles.commentReply }>
    { children }
  </div>
)
