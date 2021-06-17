import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.scss';

import { File } from 'components/File/File';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    axios.get('http://localhost:3010/dir/')
      .then((res) => {
        if (res.data && res.data.success) {
          console.log(res.data.results);
        }
      })
      .catch(e => {
        console.log(e);
      });
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
