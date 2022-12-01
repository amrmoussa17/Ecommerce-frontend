import axios from "axios"

const FETCH_PRODUCTS = "FETCH_PRODUCTS"
const FETCH_PRODUCT_INFO = "FETCH_PRODUCT_INFO"
const REMOVE_PRODUCT_INFO = "REMOVE_PRODUCT_INFO"

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

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload]
    default:
      return state
  }
}
export const infoReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_INFO:
      return { ...action.payload }
    case REMOVE_PRODUCT_INFO:
      return {}
    default:
      return state
  }
}
