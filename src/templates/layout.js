import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'reset-css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Page = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  padding: 0 -16px;
`

const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  width: calc(100% - 32px);
  padding: 0 16px;
`

const Layout = ({ children }) => {
  return (
    <Page>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Page>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
