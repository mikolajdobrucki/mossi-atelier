import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="projects">
        {posts &&
          posts.map(({ node: post }) => (
            <article className="projects-item" key={post.id}>
              {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                  <Link
                    to={post.fields.slug}
                  >
                    <div className="featured-thumbnail-inner">
                      <div className="featured-thumbnail-image">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for project ${post.frontmatter.title}`,
                          }}
                        />
                      </div>
                      <div className="featured-thumbnail-cover">
                        <h2>/{post.frontmatter.title}</h2>
                        <div className="featured-thumbnail-arrow">></div>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "project" } } }
        ) {
          edges {
            previous {
              fields {
                slug
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
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxHeight: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
