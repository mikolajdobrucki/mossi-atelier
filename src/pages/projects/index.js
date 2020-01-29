import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
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
              <div className="column is-10">
                <BlogRoll />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
