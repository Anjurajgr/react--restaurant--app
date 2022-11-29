import { RESTAURANT_LIST_FAIL ,RESTAURANT_LIST_SUCCESS } from "../constants/restaurantconstant";
import axios from 'axios'


export  const listRestaurants = ()=> async(dispatch)=>{
  const  {data} = await axios.get('/restaurants.json')

try {
    dispatch({ type:RESTAURANT_LIST_SUCCESS,payload:data.restaurants})
} catch (error) {
    dispatch({type:RESTAURANT_LIST_FAIL,error:error})
    
}


}