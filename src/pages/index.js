import * as React from "react"
import Layout from '../components/layout.js'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page" >
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
      alt="a room with white chair, table with plant"
      src="../images/desktop-screenshot.png"
      />
      </Layout>
    </main>
  )
}
export default IndexPage