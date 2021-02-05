import React from 'react'
import { Provider } from "react-redux";
import store from './store'
// import Container from "react-bootstrap/Container"
import {Container, Row, Col } from 'reactstrap';
import Sidebar from './components/Sidebar'
import Video from './components/Video'
import Feed from './components/Feed'
import CarShop from './components/CarShop'


const App = () => {
  return (
    <div>
       
     
        <Provider store={ store }>
          <Container>

          
          <Row>
            <Col>
              <Video />
              <Sidebar />
            </Col>
            <Col>
              <Feed />
              <CarShop />
            </Col>
          </Row>  
          </Container>
        </Provider>
        
    </div>
  )
}

export default App
