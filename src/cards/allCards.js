import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns, Card, Button } from 'react-bootstrap';
import cards from './cards.json';


function log() {
  console.log({cards});
}
class AllCards extends Component {

  render() {
    return (
      <CardColumns>
        <Card bg="primary" text="white" style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button onClick={log()} variant="light">Learn Here</Button>
          </Card.Body>
        </Card>
        {cards.map((card)=>
        <Card bg={card.color} text="white" style={{ width: '18rem' }}>
          
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card>
        );}
      </CardColumns>
    )
  }
}

export default AllCards
