import React from 'react'
import styled from 'styled-components'

const Clap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 48px 0;
`

export default function() {
  return (
    <Clap>
      <Helmet />
      <applause-button
        style={{ width: '120px', height: '120px' }}
        multiclap="true"
      >
        {' '}
      </applause-button>
    </Clap>
  )
}
