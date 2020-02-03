import React from 'react'
import { Link } from 'gatsby'
import ArrowLeft from "../svg/left.svg"
import ArrowRight from "../svg/right.svg"

const ProjectsNav = ({
  previous,
  next
}) => {
  return (
    <div className="project-navigation">
      {next && (
        <Link className="project-navigation-next" to={next.fields.slug}>
          <ArrowLeft/>
          /{next.frontmatter.title}
        </Link>
      )}

      {previous && (
        <Link className="project-navigation-previous" to={previous.fields.slug}>
          /{previous.frontmatter.title}
          <ArrowRight/>
        </Link>
      )}
    </div>
  )
}

export default ProjectsNav
