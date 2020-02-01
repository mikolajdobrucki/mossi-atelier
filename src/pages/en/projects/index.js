import React from 'react'

import Layout from '../../../components/LayoutEn'
import BlogRoll from '../../../components/BlogRollEn'

export default class BlogIndexEnPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="vertical-title">
          <div className="section">
            <div className="container">
              <h1>Projects</h1>
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
