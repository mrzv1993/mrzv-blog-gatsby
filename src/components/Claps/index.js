import React from 'react'
import styled from 'styled-components'
import 'applause-button'

const Claps = styled.div``

export default function() {
  return (
    <Claps>
      <applause-button
        style={{ width: '58px', height: '58px' }}
        multiclap="true"
        color="#4a4fd9"
        url="https://mrzv1993.ru/first-post"
      />
    </Claps>
  )
}
