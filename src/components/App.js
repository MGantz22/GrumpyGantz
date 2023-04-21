import React from 'react';
import Header from './Header';
import BeanControl from './BeanControl';

import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <React.Fragment>
      <Container>
        <Header />
       <Col><BeanControl /></Col>
      </Container>
    </React.Fragment>
  );
}

export default App;