import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { restaurantlistreducer } from './reducers/restaurantReducer'



const reducers = combineReducers({
    restaurantReducerdata: restaurantlistreducer,

})

const middleware = [thunk]


const store = createStore( reducers,applyMiddleware(...middleware))

export default store