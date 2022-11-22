import axios from "axios"
import { combineReducers } from "redux"

export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const FETCH_PRODUCT_INFO = "FETCH_PRODUCT_INFO"
export const REMOVE_PRODUCT_INFO = "REMOVE_PRODUCT_INFO"

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("https://fakestoreapi.com/products")
  dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}

export const fetchProductInfo = (id) => async (dispatch) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
  dispatch({ type: FETCH_PRODUCT_INFO, payload: res.data })
}

export const removeProductInfo = () => {
  return {
    type: REMOVE_PRODUCT_INFO,
  }
}

const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload]
    default:
      return state
  }
}
const infoReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_INFO:
      return { ...action.payload }
    case REMOVE_PRODUCT_INFO:
      return {}
    default:
      return state
  }
}

const product = combineReducers({
  allProducts: productReducer,
  productInfo: infoReducer,
})

export default product
