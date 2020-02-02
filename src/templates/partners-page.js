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
        <div className="columns">
          <div className="column is-8 is-offset-1">
            <div className="partners-logos columns is-multiline is-mobile">
              {
                Object.keys(main).map(function(key, index) {
                  return (
                    <article className="column is-6-mobile is-4-tablet" key={index}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: main[key].image,
                          alt: `Logo of ${main[key].alt}`
                        }}
                      />
                    </article>
                  )
                })
              }
            </div>
          </div>
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
    <Layout pageTitle={frontmatter.title}>
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

export const PartnersPageQuery = graphql`
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
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image5 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image6 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image7 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image8 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
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
