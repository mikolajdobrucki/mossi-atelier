import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import GoogleMap from "google-map-react";
import { mapOptions } from "../config/map";

export const ContactPageTemplate = ({ title, mapZoom, mapLng, mapLat, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="contact">
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
            <div className="column is-4" style={{ paddingBottom: 0 }}>
              <div style={{ minHeight: "calc(100vh - 229px)", height: "100%", width: "100%" }}>
                <GoogleMap
                  center={{
                    lat: mapLat,
                    lng: mapLng
                  }}
                  zoom={mapZoom}
                  options={mapOptions}
                  bootstrapURLKeys={{
                    key: "AIzaSyCGidjP2EjD3tGLPBSp7KsHdcaoK3lI_Kc"
                  }}
                ></GoogleMap>
              </div>
            </div>
            <div className="column is-10 is-offset-1">
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  mapZoom: PropTypes.number.isRequired,
  mapLat: PropTypes.number.isRequired,
  mapLng: PropTypes.number.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        mapZoom={post.frontmatter.mapZoom}
        mapLat={post.frontmatter.mapLat}
        mapLng={post.frontmatter.mapLng}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        mapZoom
        mapLat
        mapLng
      }
    }
  }
`
