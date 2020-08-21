import React, { FC } from 'react'
import styles from './CommentsLayout.css'
import { WriteComment } from '../WriteComment/WriteComment'
import { CommentsTreeHeader } from '../CommentsTreeHeader/CommentsTreeHeader'
import { CommentsTreeHistory } from '../CommentsTreeHistory/CommentsTreeHistory'
import { CommentReply } from '../CommentReply/CommentReply'

type CommentsLayoutProps = {}
export const CommentsLayout: FC<CommentsLayoutProps> = () => (
  <div className={ styles.commentsLayout }>
    <WriteComment />
    <CommentsTreeHeader />
    <CommentsTreeHistory />
    <CommentReply>
      <CommentsTreeHistory />
    </CommentReply>
    <CommentsTreeHistory />
  </div>
)
