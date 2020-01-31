import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, CardColumns, Card} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {cards} from './cards/cardsdata';
import logo from './pictures/logo.webp'

import CraftCards from "./cards/craftCards";
import ContactForm from "./contact";

class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />{' '} How To
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">

                <Nav.Link ><Link className="link" to="/all">See All</Link></Nav.Link>
                <NavDropdown title="Filter" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link className="dropLink" to="/crafts">Crafts</Link></NavDropdown.Item>
                </NavDropdown>  
                <Nav.Link><Link className="link" to="/contact">Contact</Link></Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success"><Link className="link" to="/search">Search</Link></Button>
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
            <Route path="/search">
              <CraftCards />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

function AllCards() {
  let listCards = cards.map((x)=>
    <Card key={x.id} bg={x.color} text="white" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={x.image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="light">Learn Here</Button>
      </Card.Body>
    </Card>
  );

  return (
    <CardColumns>
      {listCards}
    </CardColumns>
  )
}

export default App
