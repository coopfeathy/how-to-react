import React, { Component } from "react"
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Card} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

import {cards} from './cardsdata';
import logo from './pictures/logo.webp'

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
                <Nav.Link as={Link} to="/"> See All</Nav.Link>
                <NavDropdown title="Filter" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/auto">Auto</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/crafts">Crafts</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/food">Food</NavDropdown.Item>
                </NavDropdown>  
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success" as={Link} to="/search">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <br/>
          <Switch>
            <Route exact path="/">
              {getCards("all")}
            </Route>
            <Route path="/crafts">
              {getCards("primary")}
            </Route>
            <Route path="/food">
              {getCards("warning")}
            </Route>
            <Route path="/auto">
              {getCards("secondary")}
            </Route>
            <Route path="/contact">
              <ContactForm />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </Router>
        <ScrollUpButton />
      </div>
    )
  }
}
 
function ContactForm(){
  return(
    <h1>Coming Soon</h1>
  )
}

function Search(){
  return(
    <h1>lol pranked... search coming soon</h1>
  )
}

function getCards(myFilter) {

  let realCards = myFilter == "all" ? cards : cards.filter(card => card.filter == myFilter)

  let listCards = realCards.reverse().map((x)=>
    <Grid key={x.id} item>
      <Card  bg={x.filter} text="white" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={x.image} />
        <Card.Body>
          <Card.Title>{x.title}</Card.Title>
          <Card.Text>{x.description}</Card.Text>
          <Button href={x.link} variant="light">Learn Here</Button>
        </Card.Body>
      </Card>
    </Grid>
  );

  return (
    <Grid container spacing={4} justify="center">
      {listCards}
    </Grid>
  )
}


export default App
