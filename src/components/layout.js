/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


//import Header from "./header"
//import NavDark from "./nav-dark"
//import NavLight from "./nav-light"
//import Footer from "./footer"
//import "./layout.css"  
// 👆 replaced with bootstrap minified 👇
import 'bootstrap/dist/css/bootstrap.min.css'
// add custom css folder and file 
import '../css/custom.css'

// styling customizarions
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* remove default header 
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      */}
      
      {/* Custom Container */}
        <Container>
          <main>
              <div id="" className="container">
                <Row id="dynamic">
                  <div id="solutions">
                      <h1 id="ookii">Dynamo</h1>
                      <h2 className="mb-3">Dynamic solutions for a digital world.</h2>
                      <a href="/about" className="me-2"><small>About</small></a>
                      <a href="mailto:hello@dynamo.dev" className="me-2"><small>Contact</small></a>
                      <small className="cr">© Dynamo 2025</small>
                    </div>
                </Row>
                <Row id="dynamobile">
                  <div id="solutions">
                    <h1 id="chisai">Dynamo</h1>
                    <h2 className="mb-3">Dynamic solutions for a digital world.</h2>
                    <a href="/about" className="me-2"><small>About</small></a>
                    <a href="mailto:hello@dynamo.dev" className="me-2"><small>Contact</small></a>
                    <small className="cr">© Dynamo 2025</small>
                  </div>
                </Row>
              </div>
          </main>
        </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
