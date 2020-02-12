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
                    main[key] ?
                    <article className="column is-6-mobile is-4-tablet" key={index}>
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: main[key],
                          alt: 'Logo of our partner'
                        }}
                      />
                    </article>
                    :
                    ""
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
          image__1 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__2 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__3 {
            childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__4 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__5 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__6 {
            childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__7 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__8 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__7 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__8 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__9 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__10 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__11 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__12 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__13 {
            childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__14 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__15 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__16 {
            childImageSharp {
              fluid(maxWidth: 1075, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__17 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__18 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__17 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__18 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__19 {
            childImageSharp {
              fluid(maxWidth: 526, quality: 92) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image__20 {
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
`
