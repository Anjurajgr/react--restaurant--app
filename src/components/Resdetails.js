import React from 'react'
import {useState, useEffect} from 'react'
import {  useParams,Link } from 'react-router-dom'
import {Row,Col,Image} from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Reviewcard from './Reviewcard'

function Resdetails() {

const [ data , setData] = useState([])
const params= useParams()

 const fetchData = async() =>{
    await fetch('/restaurants.json')
    .then((res)=>res.json())
    .then((data)=>setData(data.restaurants))
 }

 useEffect(() => {
    fetchData()
  }, [])
    
const details = data.find((i)=> i.id == params.id) 

console.log(details)

 

  return (
    < >
    <Link className='btn btn-outline-dark my-2 rounded btn-sm' to='/' > Back</Link>

    { details ? (

        <Row className='my-3'>
            <Col md= {3}>
                <Image className='img'  src= {details.photograph} alt={details.name} fluid />

            </Col>
            <Col md= {4}>
                <ListGroup>
                <ListGroup.Item>
                    <h2> {details.name}</h2>
                    <p>{details.neighborhood}</p>
                    
                </ListGroup.Item>
                <ListGroup.Item>
                    <p> Cuisine:{details.cuisine_type}</p>
                    <p>{details.neighborhood}</p>
                    
                </ListGroup.Item>
                <ListGroup.Item>
                    
                    <p>{details.address}</p>
                    
                </ListGroup.Item>
                </ListGroup>

            </Col>
            
            <Col md= {4}>
                <ListGroup>
                <ListGroup.Item>
                    <h2> Operating Hours </h2>
                    <p> Monday:{details.operating_hours.Monday}</p>
                    <p> Tuesday:{details.operating_hours.Tuesday}</p>
                    <p> wednesday:{details.operating_hours.Wednesday}</p>
                    <p> Thrusday:{details.operating_hours.Thursday}</p>
                    <p>Friday:{details.operating_hours.Friday}</p>
                    <p>Saturday:{details.operating_hours.Saturday}</p>
                    <p>Sunday:{details.operating_hours.Sunday}</p>
                    
                </ListGroup.Item>
               
                </ListGroup>

            </Col>

            <Row>
                <Col>
                <Reviewcard  item={details.reviews}/>
                </Col>
            </Row>


        </Row> )  :'null' }

    </>

  )
}

export default Resdetails