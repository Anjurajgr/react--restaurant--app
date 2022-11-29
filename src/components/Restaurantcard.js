import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Resdetails from './Resdetails'

function Restaurantcard({item}) {
  return (
    <Link  style={{textDecoration:'none'}} to={`resdetails/${item.id}`}>
      <Card className="my-3 p-3 rounded cards">
    <Card.Img variant="top" src={item.photograph} />
    <Card.Body>
    <Card.Title>{item.name}</Card.Title>
      <Card.Text>
        Cuisine:{item.cuisine_type}
      </Card.Text>
      
    </Card.Body>
  </Card></Link>
  )
}

export default Restaurantcard