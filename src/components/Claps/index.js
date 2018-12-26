import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import 'applause-button'

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
        style={{ width: '58px', height: '58px' }}
        multiclap="true"
        color="#4a4fd9"
        url="https://mrzv1993.ru/first-post"
      >
        {' '}
      </applause-button>
    </Claps>
  )
}
