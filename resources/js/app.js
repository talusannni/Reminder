import * as React from "react";
import {createRoot} from 'react-dom/client';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

require('./bootstrap');

import CreateReminder from "./components/create.reminder";
import EditReminder from "./components/edit.reminder";
import ReactDataTableApp from './ReactDataTableApp';

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/reminder/"} className="navbar-brand text-white">
          Reminders
        </Link>
        <Link to={"/reminder/create"} className="navbar-brand text-white">
        <i class="fas fa-plus"></i> Create
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <Routes>
            <Route path="/reminder/create" element={<CreateReminder />} />
            <Route path="/reminder/:id/edit" element={<EditReminder />} />
            <Route exact path='/reminder/' element={<ReactDataTableApp />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);