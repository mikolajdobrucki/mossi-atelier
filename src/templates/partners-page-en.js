import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/LayoutEn'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const PartnersPageEnTemplate = ({
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
        <div className="columns">
          <div className="column is-8 is-offset-1">
            <div className="partners-logos columns is-multiline is-mobile">
                <article className="column is-6-mobile is-4-tablet">
                  <PreviewCompatibleImage imageInfo={main.image1} />
                </article>
                <article className="column is-6-mobile is-4-tablet">
                  <PreviewCompatibleImage imageInfo={main.image2} />
                </article>
              <article className="column is-6-mobile is-4-tablet">
                <PreviewCompatibleImage imageInfo={main.image3} />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

PartnersPageEnTemplate.propTypes = {
  title: PropTypes.string,
}

const PartnersPageEn = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PartnersPageEnTemplate
        title={frontmatter.title}
        main={frontmatter.main}
      />
    </Layout>
  )
}

PartnersPageEn.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PartnersPageEn

export const PartnersPageQueryEn = graphql`
  query PartnersPageEn($id: String!) {
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
