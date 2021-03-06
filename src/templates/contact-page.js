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
            <div className="contact-map column is-8">
              <div className="contact-map-content">
                <GoogleMap
                  center={{
                    lat: mapLat,
                    lng: mapLng
                  }}
                  zoom={mapZoom}
                  options={mapOptions}
                  bootstrapURLKeys={{
                    key: "AIzaSyAQMjQPe_S9MuJRPZtqhMaPpgV9pTkv_nY"
                  }}
                ></GoogleMap>
              </div>
            </div>
            <div className="column is-10 is-offset-1">
              <div className="content">
                <em></em>
                <PageContent  content={content} />
              </div>
              <div className="contact-socials">
                <a href="http://www.instagram.com/mossi.atelier/" target="_blank" rel="noopener noreferrer">Instagram</a>
                / 
                <a href="http://facebook.com/mossi.atelier" target="_blank" rel="noopener noreferrer">Facebook</a>
                / 
                <a href="http://pinterest.com/mossiatelier/" target="_blank" rel="noopener noreferrer">Pinterest</a>
                / 
                <a href="http://www.linkedin.com/company/mossi-atelier" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
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
    <Layout pageTitle={post.frontmatter.title}>
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
