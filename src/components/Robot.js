import React, { Fragment } from 'react'
import logo from './logo.svg'
import './robot.css'
import { Container, Row, Col } from 'react-grid-system'


const Page1 = () => {
 
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={6}>
            <img src={logo} className='logo'  /> 
          </Col>

          <Col lg={3}>
            <br />
            <br />
            <p>
              <b>There is no note available press on “+” to add new </b>
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Page1
