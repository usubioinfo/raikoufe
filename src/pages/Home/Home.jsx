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
      files: [],
      directories: [],
      currentPath: '/'
    }

    this.handleDirClick = this.handleDirClick.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3010/dir${this.state.currentPath}`)
      .then((res) => {
        if (res.data && res.data.success) {
          console.log(res.data.files);
          this.setState({files: res.data.files, directories: res.data.directories});
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleDirClick(dirName) {
    let currentPath = this.state.currentPath;
    this.setState({currentPath: `${currentPath}/${dirName}/`.replace(/\/\//, '/')}, () => {
      axios.get(`http://localhost:3010/dir${this.state.currentPath}`)
        .then((res) => {
          if (res.data && res.data.success) {
            this.setState({files: res.data.files, directories: res.data.directories});
          }
        })
        .catch(e => {
          console.log(e);
        });
    });
  }

  handleBackDir() {
    let currentPath = this.state.currentPath;
    let pathArr = currentPath.split('/');
    pathArr.pop();
    pathArr.pop();

    console.log(`${pathArr.join('/')}/`);

    this.setState({currentPath: `${pathArr.join('/')}/`.replace(/\/\//, '/')}, () => {
      axios.get(`http://localhost:3010/dir${this.state.currentPath}`)
        .then((res) => {
          if (res.data && res.data.success) {
            this.setState({files: res.data.files, directories: res.data.directories});
          }
        })
        .catch(e => {
          console.log(e);
        });
    });
  }

  render() {
    let backButton = <div></div>;

    if (this.state.currentPath !== '/') {
      backButton = (
        <span className="back-button px-4 py-1" onClick={() => {this.handleBackDir()}}>
          Back
        </span>
      );
    }

    return (
      <Container className="img-container py-4 px-5 text-start">
        {backButton}
        <Row className="display-flex mt-2">
          {this.state.directories.map((dir, index) => (
            <Col sm={3} key={`dir-${dir}-${index}`}>
              <File fileObject={dir} clickHandler={this.handleDirClick} />
            </Col>
          ))}
        </Row>
        <Row className="display-flex">
          {this.state.files.map((file, index) => (
            <Col sm={3} key={`file-${file}-${index}`}>
              <File fileObject={file}/>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
