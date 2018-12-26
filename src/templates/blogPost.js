import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import styled from 'styled-components'
import Moment from 'react-moment'
import 'moment/locale/ru'
import Helmet from 'react-helmet'

const Time = styled(Moment)`
  font-family: 'Fira Mono', monospace;
  font-weight: 400;
  color: #6c7480;
  font-size: 14px;
  margin-top: 32px;
`

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  margin-top: 32px;
  color: #354356;
`

const BlogPost = styled.div`
  margin-top: 32px;
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    max-width: 640px;
    margin: 0 auto;
    font-family: 'Fira Mono', monospace;
    font-size: 17px;
    line-height: 28px;
    color: #354356;
  }
`
const Clap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 48px 0;
`

const Template = ({ data }) => {
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const date = markdownRemark.frontmatter.date
  const html = markdownRemark.html
  return (
    <Layout>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/applause-button/dist/applause-button.css"
        />
        <script src="https://unpkg.com/applause-button/dist/applause-button.js" />
      </Helmet>
      <Time format="D MMM YYYY" withTitle locale="ru">
        {date}
      </Time>
      <Title>{title}</Title>
      <Clap>
        <applause-button
          style={{ width: '120px', height: '120px' }}
          url="https://mrzv1993.ru/first-post"
          multiclap="true"
        />
      </Clap>
      <BlogPost dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        tags
        path
        description
        summary
        image
      }
    }
  }
`

export default Template
