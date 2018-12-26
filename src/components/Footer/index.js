import React from 'react'
import styled from 'styled-components'

const FooterWrap = styled.header`
  width: 100%;
  border-top: 1px solid #eeeff0;
  margin: auto auto 0 auto;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;
  max-width: 960px;
  padding: 24px 16px;
  margin: 0 auto;
  font-family: 'Fira Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  color: #6c7480;

  @media (min-width: 440px) {
    flex-flow: wrap;
  }
`

const CopyRight = styled.p``

const Mail = styled.a`
  color: #6c7480;
  text-decoration: none;
  margin-top: 16px;

  &:hover {
    color: #4a4fd9;
  }

  @media (min-width: 440px) {
    margin-top: 0;
  }
`

export default function() {
  return (
    <FooterWrap>
      <Footer>
        <CopyRight>© 2018 Станислав Морозов</CopyRight>
        <Mail href="mailto:mrzv1993@yandex.ru">mrzv1993@yandex.ru</Mail>
      </Footer>
    </FooterWrap>
  )
}
