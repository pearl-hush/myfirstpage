import React, { FC } from 'react'
import styles from './Fact.css'

type FactProps = {
  link: string
}
export const Fact: FC<FactProps> = ({ children, link }) => (
  <div className={ styles.fact }>
    <img className= { styles.factImage } src="https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg" />
    <a className={ styles.factLink } href={ link }>{ children }</a>
  </div>
)
