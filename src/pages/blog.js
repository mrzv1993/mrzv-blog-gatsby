import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Moment from 'react-moment'
import 'moment/locale/ru'

import Layout from '../templates/layout'

const Posts = styled.div`
  margin-top: 32px;
  display: flex;
  flex-flow: wrap;
`

const Post = styled.a`
  width: 288px;
  display: flex;
  flex-flow: column;
  align-items: baseline;
  text-decoration: none;

  @media (min-width: 640px) {
    flex-flow: wrap;
  }
`

const ImageScale = styled.div`
  width: 288px;
  height: 152px;
  overflow: hidden;
`

const Image = styled.img`
  width: 288px;
  height: 152px;
  transition: all 0.32s;

  ${Post}:hover & {
    transform: scale(1.08, 1.08);
  }
`

const PostTitle = styled.div`
  display: flex;
  flex-flow: column;
`

const Time = styled(Moment)`
  font-family: 'Fira Mono', monospace;
  font-weight: 400;
  color: #6c7480;
  font-size: 14px;
  margin-top: 12px;
  transition: all 0.32s;

  ${Post}:hover & {
    color: #2c3949;
  }
`

const TitleLink = styled(Link)`
  font-size: 21px;
  color: #2c3949;
  font-weight: 700;
  text-decoration: none;
  margin-top: 8px;
  font-family: 'Source Sans Pro', sans-serif;
  transition: all 0.32s;

  ${Post}:hover & {
    color: #4a4fd9;
  }
`

const Blog = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <Posts>
        {posts.map(({ node: post }, index) => {
          const { frontmatter } = post
          return (
            <Post key={frontmatter.path} href={`blog/${frontmatter.path}`}>
              <ImageScale>
                <Image
                  src={`${frontmatter.image}`}
                  width="189"
                  height="255"
                  alt="lorem"
                />
              </ImageScale>
              <PostTitle>
                <Time format="D MMM YYYY" withTitle locale="ru">
                  {frontmatter.date}
                </Time>
                <TitleLink to={`blog/${frontmatter.path}`}>
                  {frontmatter.title}
                </TitleLink>
              </PostTitle>
            </Post>
          )
        })}
      </Posts>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            tags
            description
            summary
            image
          }
        }
      }
    }
  }
`

export default Blog
