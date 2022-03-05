// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
// add custom css folder and file 
import '../css/custom.css'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <>
      {/* Custom Container */}
        <Container>
          <main>
              <div id="" className="container">
                <Row id="dynamic">
                  <div id="solutions">
                      <h3 className="mb-3">We help clients bring their projects to life.</h3>
                      <span><i class="fad fa-dot-circle pr-2"></i>Strategic Consulting</span>
                      <span>Web 3 / NFT Dev</span>
                      <span><i class="fad fa-dot-circle pr-2"></i>Full Stack Web Dev + Design</span>
                      <span className="mb-3"><i class="fad fa-dot-circle pr-2"></i>Subscriptions + Payments Infrastructure</span>
                      <a href="/"><small>Dynamo</small></a>
                      <a href="mailto:hello@dynamo.dev" className="ms-2 me-2"><small>Contact</small></a>
                      <small className="cr">© Dynamo 2022</small>
                    </div>
                </Row>
                <Row id="dynamobile">
                  <div id="solutions">
                  <h3 className="mb-3">We help clients bring their projects to life.</h3>
                      <span><i class="fad fa-dot-circle pr-2"></i>Strategic Consulting</span>
                      <span>Web 3 / NFT Dev</span>
                      <span><i class="fad fa-dot-circle pr-2"></i>Full Stack Web Dev + Design</span>
                      <span className="mb-3"><i class="fad fa-dot-circle pr-2"></i>Subscriptions + Payments Infrastructure</span>
                      <a href="/"><small>Dynamo</small></a>
                      <a href="mailto:hello@dynamo.dev" className="ms-2 me-2"><small>Contact</small></a>
                      <small className="cr">© Dynamo 2022</small>
                  </div>
                </Row>
              </div>
          </main>
        </Container>
    </>
  )
}

// Step 3: Export your component
export default AboutPage