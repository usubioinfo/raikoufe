import logo from './logo.svg';
import './App.css';
import './scss/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RNavbar } from 'components/RNavbar/RNavbar';
import { Home } from 'pages/Home/Home';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App() {
  return (
    <Container fluid className="main-card h-100">
      <Row>
        <Col sm={12}>
          <Router>
            <Container fluid className="App px-4">
              <RNavbar />
              <Home />
            </Container>
          </Router>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
