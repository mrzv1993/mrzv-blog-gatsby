import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import styled from 'styled-components'
import Moment from 'react-moment'
import 'moment/locale/ru'
import Helmet from 'react-helmet'

const Hero = styled.div`
  max-width: 680px;
  margin: 0 auto;
`

const Tags = styled.div``

const Title = styled.h1`
  font-size: 44px;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 700;
  margin: 0 auto;
  margin-top: 32px;
  color: #2c3949;
  line-height: 48px;
  max-width: 680px;
`
const DataAndShare = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  font-family: 'Fira Mono', monospace;
  font-size: 14px;
  font-weight: 400;
  color: #6c7480;
`

const Time = styled(Moment)`
  display: inline-block;
`

const Share = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
`

const SharedLink = styled.a`
  color: #6c7480;
  text-decoration: none;
  margin-left: 8px;
`

const SharedVkontakte = styled(SharedLink)`
  &:hover {
    color: #4c6c91;
  }
`

const SharedFacebook = styled(SharedLink)`
  &:hover {
    color: #3b5998;
  }
`

const SharedTwitter = styled(SharedLink)`
  &:hover {
    color: #55acee;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const BlogPost = styled.div`
  margin-top: 32px;
  font-family: 'Fira Mono', monospace;
  font-size: 17px;
  line-height: 29px;
  color: #2c3949;
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    max-width: 680px;
    margin: 0 auto;
  }

  h4 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  applause-button {
    margin: 0 auto;
    width: 64px;
    height: 64px;
    cursor: pointer;
  }

  applause-button .count {
    font-size: 18px;
    font-family: 'Fira Mono', monospace;
    top: -24px;
  }
`

const Template = ({ data }) => {
  const { markdownRemark } = data
  const date = markdownRemark.frontmatter.date
  const title = markdownRemark.frontmatter.title
  const image = markdownRemark.frontmatter.image
  const tags = markdownRemark.frontmatter.tags
  const path = markdownRemark.frontmatter.path
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
      <Hero>
        <Tags>{tags}</Tags>
        <Title>{title}</Title>
        <DataAndShare>
          <Time format="D MMM YYYY" withTitle locale="ru">
            {date}
          </Time>
          <Share>
            <p>Поделиться:</p>
            <SharedVkontakte
              href={`https://vk.com/share.php?url=https://mrzv1993.ru${path}`}
              target="_blank"
              class="share-popup"
            >
              vk
            </SharedVkontakte>
            <SharedFacebook
              href={`http://www.facebook.com/sharer/sharer.php?u=https://mrzv1993.ru${path}&t=${title}`}
              target="_blank"
              class="share-popup"
            >
              fb
            </SharedFacebook>
            <SharedTwitter
              href={`http://www.twitter.com/intent/tweet?url=https://mrzv1993.ru${path}&via=mrzv1993&text=${title}`}
              target="_blank"
              class="share-popup"
            >
              tw
            </SharedTwitter>
          </Share>
        </DataAndShare>
      </Hero>
      <Image src={image} />
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
