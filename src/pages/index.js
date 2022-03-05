import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

// Bootstrap 
import { Row } from "react-bootstrap"

const IndexPage = () => (
  <Layout>
    <Seo title="⚡️ Dynamo" />
    <script async src="//static.getclicky.com/101297670.js"></script>
    <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101297670ns.gif" /></p></noscript>
  </Layout>
)

export default IndexPage
