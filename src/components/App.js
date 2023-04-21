import React from 'react';
import Logoimg from './Logo';
import BeanControl from './BeanControl';
import Header from './Header';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <React.Fragment>
      <Container>
        <Header />
        <Row>
        <Col><BeanControl /></Col>
        <Col><Logoimg /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;