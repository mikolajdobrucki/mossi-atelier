import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import GoogleMap from "google-map-react";

const mapOptions = {
  styles: [
    { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#c9b2a6" }]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [{ color: "#dcd2be" }]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [{ color: "#ae9e90" }]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#93817c" }]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{ color: "#a5b076" }]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#447530" }]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#f5f1e6" }]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#fdfcf8" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#f8c967" }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#e9bc62" }]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [{ color: "#e98d58" }]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [{ color: "#db8555" }]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [{ color: "#806b63" }]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [{ color: "#8f7d77" }]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#ebe3cd" }]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [{ color: "#dfd2ae" }]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ color: "#b9d3c2" }]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#92998d" }]
    }
  ]
};

export const AboutPageTemplate = ({ title, mapZoom, mapLng, mapLat, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "100vh", width: "100%" }}>
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
    </section>
  );
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  mapZoom: PropTypes.number.isRequired,
  mapLat: PropTypes.number.isRequired,
  mapLng: PropTypes.number.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
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

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
