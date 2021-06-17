import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.scss';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <h1>Testing</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
