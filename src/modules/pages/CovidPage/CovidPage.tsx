import React, { FC } from 'react'
import { HeaderUnauthorized } from '../../pageParts/HeaderUnauthorized/HeaderUnauthorized'
import styles from './CovidPage.css'
import { SingleColumnLayout } from '../../layouts/SingleColumnLayout/SingleColumnLayout'
import { SelectorWrapper } from '../../selector/SelectorWrapper/SelectorWrapper'
import { ChartWrapper } from '../../charts/ChartWrapper/ChartWrapper'
import { FooterUnauthorized } from '../../pageParts/FooterUnauthorized/FooterUnauthorized'

type CovidPageProps = {}
export const CovidPage: FC<CovidPageProps> = () => {
  return (
    <>
      <div className={ styles.headerMargin }>
        <HeaderUnauthorized />
      </div>
      <SingleColumnLayout>
        <h1 className={ styles.title }>
          COVID-19
          <br />
          Economic Impact
        </h1>
        <SelectorWrapper />
        <ChartWrapper>
          Consumer Spending Trend
        </ChartWrapper>
        <ChartWrapper subtitle='Last 2 weeks vs. same period last year'>
          Spending Change by State
        </ChartWrapper>
        <div className={ styles.chartRow }>
          <div className={ styles.colWrapper }>
            <ChartWrapper subtitle='Last 2 weeks vs. same period last year'>
              Spending Change by Category
            </ChartWrapper>
          </div>
          <div className={ styles.colWrapper }>
            <ChartWrapper subtitle='Last 2 weeks vs. same period last year'>
              Spending Change for Top Merchants
            </ChartWrapper>
          </div>
        </div>
        <div className={ styles.disclaimer }>
          The information on this page is provided solely to raise awareness about the financial impact of the COVID-19 crisis on people and businesses. 
          It will be updated daily at midnight eastern standard time.
          <br/> <p/>
          The data is based on a proprietary panel that covers more than a million people across the United States.
          <br/> <p/>
          You may distribute and reprint this information for non-commercial purposes with attribution to Status Money and a link to this page.
          <br/> <p/>
          For other inquiries, please get in touch: <a className={ styles.link } href='mailto:contact@statusmoney.com'>contact@statusmoney.com</a>.
        </div>
      </SingleColumnLayout>
      <FooterUnauthorized/>
    </>
  )
}