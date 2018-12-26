import React from 'react'
import styled from 'styled-components'

const BlogTitle = styled.section`
  margin-top: 32px;

  @media (min-width: 492px) {
    margin: 64px auto 0 auto;
  }
`

const Title = styled.h2`
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  font-size: 23px;
  color: #2c3949;

  @media (min-width: 492px) {
    margin: 64px auto 0 auto;
    font-size: 32px;
  }
`

const Description = styled.p`
  margin-top: 8px;
  font-family: 'Fira Mono', monospace;
  font-weight: 400;
  font-size: 14px;
  color: #6c7480;
  line-height: 1.24;

  @media (min-width: 492px) {
    font-size: 16px;
  }
`

export default function() {
  return (
    <BlogTitle>
      <Title>Блог</Title>
      <Description>
        Пишу о&nbsp;дизайне интерфейсов, фронтенде, личном опыте
        и&nbsp;удаленной работе.
      </Description>
    </BlogTitle>
  )
}
