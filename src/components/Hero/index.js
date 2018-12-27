import React from 'react'
import styled from 'styled-components'
import me from './me.svg'

import * as font from '../../style/font'
import * as color from '../../style/color'

const Hero = styled.h1`
  margin-top: 32px;
  color: ${color.primary};
  ${font.fontH1};
  @media (min-width: 492px) {
    font-size: 48px;
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
