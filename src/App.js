import React, { Fragment } from 'react'
import './App.css'
import { Container, Row, Col } from 'react-grid-system'


//components
import Robot from './components/Robot'
import NewTask from './components/Create'
import All from './components/All' 
import FaqeTask from './components/FaqeTask'




const App = () => {
return (
    <Fragment>
        <nav class='navbar-nav s-auto'>
        <div class='container-fluid'>
          <div class='navbar-header'>
            <div class='topnav-right'>
              <a>
                <b>This is a notebook</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Container>
          <Row>
              <Col lg={3} > 
              <br /> <br /> <br />
            <br /> <br />
            <br /> <br />
            <br /> <br />
              <button className="butoni">-Add New</button>
              <br /> <br />
              <button className="butoni">-All Tasks</button>
              </Col>
              <Col lg={6}>
<All />
              </Col>
              <Col lg={3}>
                  
                  </Col>
          </Row>
      </Container>
    </Fragment>
)
}
export default App