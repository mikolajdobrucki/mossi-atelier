import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ProjectsNav from '../components/ProjectsNav'

export const BlogPostTemplate = ({
  description,
  layout,
  title,
  featuredimage,
  images,
  helmet,
  nextProjectLink,
  previousProjectLink
}) => {

  return (
    <div>
      {helmet || ''}
      <div className="project">
        <div className="vertical-title">
          <div className="section">
            <div className="container">
              <h1>Projekty</h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="projects-content column is-12 is-11-desktop">
                <div className={`project-layout ${layout}`}>
                  <div className="project-featuredimage">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: featuredimage,
                        alt: `Image of project ${title} by Mossi Atelier`
                      }}
                    />
                  </div>
                  

                <div className="project-content">
                  <h1 className="project-title">
                    /{title}
                  </h1>
                  
                  <p className="project-description">
                    {description}
                  </p>

                  <div className="project-navigation-top">
                    <ProjectsNav previous={previousProjectLink} next={nextProjectLink}/>
                  </div>
                </div>

                  {
                    Object.keys(images).map(function(key, index) {
                      return (
                        <div className="project-photo" key={index}>
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: images[key],
                              alt: `Image of project ${title}`
                            }}
                          />
                        </div>
                      )
                    })
                  }
                </div>
                
              </div>
              <div className="project-buttons column is-1">
                <Link className="project-button project-button-back" to="/projects">x</Link>
                <a className="project-button project-button-up" href="#navbar">up</a>
              </div>
            </div>
            <div className="columns">
              <div className="project-navigation-bottom column is-12 is-9-desktop">
                <ProjectsNav previous={previousProjectLink} next={nextProjectLink}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  description: PropTypes.string,
  layout: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.object,
  featuredimage: PropTypes.object,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  const { edges: posts } = data.allMarkdownRemark

  const nextProjectLink = posts
    .find(project => project.node.id === post.id)
    .next

  const previousProjectLink = posts
    .find(project => project.node.id === post.id)
    .previous

  return (
    <Layout>
      <BlogPostTemplate
        layout={post.frontmatter.layout}
        featuredimage={post.frontmatter.featuredimage}
        description={post.frontmatter.description}
        images={post.frontmatter.images}
        helmet={
          <Helmet titleTemplate="%s | Projekty | Mossi Atelier">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        nextProjectLink={nextProjectLink}
        previousProjectLink={previousProjectLink}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        layout
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        images {
          image_1 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_2 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_3 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_4 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_5 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_6 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_7 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_8 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "project" } } }
    ) {
      edges {
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
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
