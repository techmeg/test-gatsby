import * as React from "react"
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from "gatsby"

const IndexPage = ({data}) => {
  return (
    <main>
      <Layout pageTitle="Home Page" >
      <p>{ data.site.siteMetadata.description }</p>
      <StaticImage
      alt="a room with white chair, table with plant"
      src="../images/desktop-screenshot.png"
      />
      </Layout>
    </main>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage