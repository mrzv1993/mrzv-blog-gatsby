import React from 'react'
import Helmet from 'react-helmet'

import Layout from './layout'

const Template = props => {
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/applause-button/dist/applause-button.css"
        />
        <script src="https://unpkg.com/applause-button/dist/applause-button.js" />
      </Helmet>
      <p>sada</p>
      <applause-button
        style={{ width: '58px', height: '58px', display: 'block' }}
        multiclap="true"
        color="#4a4fd9"
      />
    </Layout>
  )
}

export default Template
