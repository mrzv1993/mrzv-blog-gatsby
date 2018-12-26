import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'reset-css'

import Header from '../Header'

const Wrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Wrapper>{children}</Wrapper>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
