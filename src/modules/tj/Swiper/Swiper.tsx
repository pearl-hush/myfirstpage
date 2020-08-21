import React, { FC } from 'react'
import styles from './Swiper.css'
import { BlockSwiper } from '../BlockSwiper/BlockSwiper'

type SwiperProps = {
  title: string
}
export const Swiper: FC<SwiperProps> = ({ title }) => (
  <div className={ styles.swiper }>
    <div className={ styles.swiperHeader }>
      { title }
    </div>
    <div className={ styles.swiperContent }>
      <BlockSwiper />
      <BlockSwiper />
      <BlockSwiper />
      <BlockSwiper />
      <BlockSwiper />
      <BlockSwiper />
      <BlockSwiper />
      <BlockSwiper />
      <BlockSwiper />
    </div>
  </div>
)
