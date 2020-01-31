import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/LayoutEn'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplateEn = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="about">
      <div className="vertical-title">
        <div className="section">
          <div className="container">
            <h1>{title}</h1>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-8 is-offset-1">
              <ol></ol>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

AboutPageTemplateEn.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPageEn = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplateEn
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPageEn.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPageEn

export const aboutPageEnQuery = graphql`
  query AboutPageEn($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
