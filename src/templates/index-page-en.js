import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/LayoutEn'

export const IndexPageTemplateEn = ({
  image,
  title
}) => (
  <main className="home">
    <div className="vertical-title vertical-title-white">
      <div className="section">
        <div className="container">
          <h1>Mossi Atelier</h1>
        </div>
      </div>
    </div>
    <img src={
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        } className="home-img" />
  </main>
)

IndexPageTemplateEn.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplateEn
        image={frontmatter.image}
        title={frontmatter.title}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplateEn {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page-en" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
