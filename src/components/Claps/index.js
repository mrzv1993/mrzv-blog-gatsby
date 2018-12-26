import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Claps = styled.div``

export default function() {
  return (
    <Claps>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/applause-button/dist/applause-button.css"
        />
        <script src="https://unpkg.com/applause-button/dist/applause-button.js" />
      </Helmet>
      <applause-button
        style={{ width: '58px', height: '58px', display: 'block' }}
        multiclap="true"
        color="#4a4fd9"
      >
        {' '}
      </applause-button>
    </Claps>
  )
}
