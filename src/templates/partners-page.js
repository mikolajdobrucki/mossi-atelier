import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PartnersPageTemplate = ({
  title,
  main,
}) => (
  <div className="partners">
    <div className="vertical-title">
        <div className="section">
          <div className="container">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    <section className="section">
      <div className="container">
        <div className="partners-logos columns is-multiline is-mobile">
            <article className="column is-6 is-5-desktop">
              <PreviewCompatibleImage imageInfo={main.image1} />
            </article>
            <article className="column is-6 is-5-desktop">
              <PreviewCompatibleImage imageInfo={main.image2} />
            </article>
          <article className="column is-6 is-5-desktop">
            <PreviewCompatibleImage imageInfo={main.image3} />
          </article>
        </div>
      </div>
    </section>
  </div>
)

PartnersPageTemplate.propTypes = {
  title: PropTypes.string,
}

const PartnersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PartnersPageTemplate
        title={frontmatter.title}
        main={frontmatter.main}
      />
    </Layout>
  )
}

PartnersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PartnersPage

export const productPageQuery = graphql`
  query PartnersPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        main {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
