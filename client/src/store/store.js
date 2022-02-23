import {createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import userReducer from "../reducers/userReducer"

const rootReducer=combineReducers({userReducer})
const middelware=[thunk]
const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(...middelware),
        window.__REDUX_DEVTOOLS_EXTENSION__? 
        window.__REDUX_DEVTOOLS_EXTENSION__():
        f=>f
    )
)
export default store