import React from 'react'
import { useState,useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import Restaurantcard from './Restaurantcard'
import {useDispatch,useSelector}from 'react-redux'
import {listRestaurants} from '../actions/restaurantaction'

function Home() {
  
  const dispatch = useDispatch();

  const restaurantreducerdataselect= useSelector(state=> state.restaurantReducerdata);
  const {restaurant}=restaurantreducerdataselect

  // const[hotels, setHotels]=useState([])


  // const fetchData = async() => {
  //   await fetch('/restaurants.json')
  //   .then((res) => res.json())
  //   .then((data) => setHotels(data.restaurants))
  //  }


  useEffect(() => {
    dispatch(listRestaurants())
  }, [])
  
  


  return (
    <Row>
      {restaurant.map((item)=>(
        <Col  sm={12}  md={8} lg={6} xl={3}  > 
            <Restaurantcard item ={item}/>
        </Col>

      ))}
    </Row>
    
  )
}

export default Home