import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, NavLink} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css"

import AllCards from "./cards/allCards";
import CraftCards from "./cards/craftCards";
import ContactForm from "./contact";

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>How To</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <Nav.Link ><Link className="link" to="/all">See All</Link></Nav.Link>

                <Nav.Link><Link className="link" to="/contact">Contact</Link></Nav.Link>

                <NavDropdown title="Filter" id="basic-nav-dropdown">

                  <NavDropdown.Item><Link className="dropLink" to="/crafts">Crafts</Link></NavDropdown.Item>
                  
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <br/>
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
      </div>
    )
  }
}

export default App
