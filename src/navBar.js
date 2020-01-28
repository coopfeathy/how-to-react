import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AllCards from "./cards/allCards";
import CraftCards from "./cards/craftCards";
import ContactForm from "./contact";

class MyMainNav extends Component {
  render() {

    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>How To</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/all">See All</Link></Nav.Link>
              <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/crafts">Crafts</Link></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/all">
            <AllCards />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/crafts">
            <CraftCards />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default MyMainNav
