import { combineReducers } from "redux"
import { productReducer, infoReducer } from "./product"
import cartReducer from "./cart"

const reducers = combineReducers({
  allProducts: productReducer,
  productInfo: infoReducer,
  cartItems: cartReducer,
})

export default reducers
