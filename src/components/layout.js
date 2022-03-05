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
import NavDark from "./nav-dark"
//import NavLight from "./nav-light"
import Footer from "./footer"
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
      
      {/* Custom Navbar */}
      {NavDark}
      {/* Custom Container */}
        <Container>
          <main>
              <div id="" className="container">
                <Row>
                  <div className="col-sm-2"></div>
                    <div id="about" className="col-sm-8">
                      <h4>At Dynamo we help clients bring their projects to life. From strategic guidance to in-the-weeds design and dev work, we can help you find success.</h4>
                        <div className="mt-5">
                        <h6><i className="fad fa-dot-circle pr-2"></i>Full Stack Web 2/3 Development</h6>
                          <h6><i className="fad fa-dot-circle pr-2"></i>Strategic Consulting</h6>
                          <h6><i className="fad fa-dot-circle pr-2"></i>Custom Front-End Design</h6>
                          <h6><i className="fad fa-dot-circle pr-2"></i>Subscriptions and Payments Infrastructure</h6>
                          <h6><i className="fad fa-dot-circle pr-2"></i>Performance Marketing</h6>
                      </div>
                    </div>
                  <div className="col-sm-2"></div>
                </Row>
                <Row>
                  <div id="dynamic" className="">
                    <a href="mailto:hello@dynamo.dev" class="mr-2"><small> Contact</small></a>
                    <small class="cr">© Dynamo 2022</small>
                  </div>
                </Row>
              </div>
          </main>
        </Container>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
