import React from 'react'
import withData from '../src/lib/withData'
import locales from '../src/locales'

export const Index = () => (
  <div className="app">
    <img src="/static/images/logo_jobthai.jpg" alt="jobthai-logo" />
    <h1>{locales.t('greeting')}</h1>
    <style jsx>{`
      .app {
        text-align: center;
      }
    `}</style>
  </div>
)

export default withData(Index)
