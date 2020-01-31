import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns, Card, Button } from 'react-bootstrap';
import {cards} from './cardsdata.js';

class CraftCards extends Component {
  render() {
    let realCards = cards.filter(card => card.filter == "craft")
    let listCards = realCards.map((x)=>
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
}

export default CraftCards

