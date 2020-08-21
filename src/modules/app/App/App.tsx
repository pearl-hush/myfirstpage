import React, { FC } from 'react'
import styles from './App.css'
// import { Page } from '../../tj/Page/Page'
import { CovidPage } from '../../pages/CovidPage/CovidPage'

type AppProps = {}

export const App: FC<AppProps> = () => (
  <div className={ styles.app }>
    {/* <Page /> */}
    <CovidPage />
  </div>
)