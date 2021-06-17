import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Brand} from 'react-bootstrap';

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
      <div className="mb-4 mt-3 nav-wrapper">
        <Navbar>
          <Navbar.Brand className="h-brand">
            <b>HuCoPIA</b>
          </Navbar.Brand>

          <Nav className="mr-auto">
            <Nav.Link>
              Home
            </Nav.Link>
            <Nav.Link>
              About
            </Nav.Link>
            <Nav.Link>
              Data Set
            </Nav.Link>
            <Nav.Link>
              Help
            </Nav.Link>
          </Nav>

        </Navbar>
      </div>
    );
  }
}

export {RNavbar};
