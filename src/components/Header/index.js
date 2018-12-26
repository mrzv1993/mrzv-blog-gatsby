import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logo from './logo.png'

const HeaderWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeff0;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  padding: 16px 16px;
  margin: 0 auto;
`

const Logo = styled(Link)`
  width: 40px;
  height: 40px;
  margin-right: 16px;
  background-color: #4a4fd9;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50%;
  border-radius: 50%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  font-family: 'Fira Mono', monospace;
  font-size: 14px;
  font-weight: 400;
`

const SocialLink = styled.a`
  display: inline-block;
  margin-left: 12px;
  color: #6c7480;
  text-decoration: none;

  &:hover {
    color: #4a4fd9;
  }
`

export default function() {
  return (
    <HeaderWrap>
      <Header>
        <Logo to="/" />
        <Nav>
          <SocialLink href="https://dribbble.com/mrzv1993">Дрибббл</SocialLink>
          <SocialLink href="https://vk.com/mrzv1993">Вконтакте</SocialLink>
        </Nav>
      </Header>
    </HeaderWrap>
  )
}
