import React from 'react'
import styled from 'styled-components'
import me from './me.svg'

const Hero = styled.h1`
  margin-top: 32px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 900;
  font-size: 28px;
  line-height: 1.2;
  color: #2c3949;

  @media (min-width: 492px) {
    font-size: 40px;
    margin: 64px auto 0 auto;
  }
`

const ImgBox = styled.span``

const Me = styled.img`
  width: 24px;
  position: relative;
  top: 6px;

  @media (min-width: 492px) {
    width: 38px;
    top: 10px;
  }
`

export default function() {
  return (
    <Hero>
      Привет, <br />
      меня зовут Станислав Морозов. <br />Я фронтенд дизайнер&nbsp;
      <ImgBox>
        <Me src={me} alt="" />
      </ImgBox>
    </Hero>
  )
}
