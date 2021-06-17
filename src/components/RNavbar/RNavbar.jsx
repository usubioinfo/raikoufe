import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Form } from 'react-bootstrap'

import './RNavbar.scss';

class RNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
    console.log(this.props.active);

    this.activeLink = this.activeLink.bind(this);
  }

  activeLink(link) {
    console.log(link)
    console.log(this.props.active)
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

  render() {console.log(this.props.active)
    let className = 'mx-1';
    let active = 'mx-1 current';

    return (
      <Container fluid>
        <Row className="pt-2">
          <Col sm={4} className="text-left">
            <h2 className="r-brand text-start">
              Raikou
            </h2>
          </Col>

          <Col sm={2}>
            <Form.Control className="nav-form" placeholder="Search"></Form.Control>
          </Col>

          <Col sm={2} className="pt-1">
            <span className="nav-option bioinfo">
              Bioinfo
            </span>
          </Col>
          <Col sm={2} className="pt-1">
            <span className="nav-option bcore">
              Bioinfocore
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}

export {RNavbar};
