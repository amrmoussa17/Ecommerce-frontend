import { combineReducers } from "redux"
import productReducer from "./product"

const reducers = combineReducers({
  allProducts: productReducer,
})

export default reducers
