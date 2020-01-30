import React from 'react'
import { Link } from 'gatsby'

const ProjectsNav = ({
  previous,
  next
}) => {
  return (
    <div className="project-navigation">
      {previous && (
        <Link className="project-navigation-previous" to={previous.fields.slug}>/{previous.frontmatter.title}</Link>
      )}

      {next && (
        <Link className="project-navigation-next" to={next.fields.slug}>/{next.frontmatter.title}</Link>
      )}
    </div>
  )
}

export default ProjectsNav
