import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/LayoutEn'
import Content, { HTMLContent } from '../components/Content'
import GoogleMap from "google-map-react";
import { mapOptions } from "../config/map";

export const ContactPageEnTemplate = ({ title, mapZoom, mapLng, mapLat, content, contentComponent }) => {
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
              <PageContent className="content" content={content} />
              <div className="contact-socials">
                <a href="http://www.instagram.com/mossi.atelier/" target="_blank" rel="noopener noreferrer">Instagram</a>
                / 
                <a href="http://facebook.com/mossi.atelier" target="_blank" rel="noopener noreferrer">Facebook</a>
                / 
                <a href="https://pinterest.com/mossiatelier/" target="_blank" rel="noopener noreferrer">Pinterest</a>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

ContactPageEnTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  mapZoom: PropTypes.number.isRequired,
  mapLat: PropTypes.number.isRequired,
  mapLng: PropTypes.number.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPageEn = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout pageTitle={post.frontmatter.title}>
      <ContactPageEnTemplate
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

ContactPageEn.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPageEn

export const contactPageQuery = graphql`
  query ContactPageEn($id: String!) {
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
