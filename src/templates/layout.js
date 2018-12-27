import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'reset-css'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Page = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  min-width: 320px;
  min-height: 100vh;
`

const Wrapper = styled.main`
  width: 100%;
  max-width: 960px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 16px;
`

const Layout = ({ children }) => {
  return (
    <Page>
      <Helmet>
        {' '}
        <link
          rel="stylesheet"
          href="https://unpkg.com/applause-button/dist/applause-button.css"
        />
        <script src="https://unpkg.com/applause-button/dist/applause-button.js" />
      </Helmet>

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
