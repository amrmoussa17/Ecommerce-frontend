import axios from "axios"

export const FETCH_PRODUCTS = "FETCH_PRODUCTS"

const initialState = {
  products: [],
}

export const fetchProducts = () => async (dispatch) => {
  const res = await axios.get("https://fakestoreapi.com/products")
  dispatch({ type: FETCH_PRODUCTS, payload: res.data })
}
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload }
    default:
      return state
  }
}
export default productReducer
