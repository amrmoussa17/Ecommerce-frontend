const ADD_ITEM = "ADD_ITEM"
const REMOVE_ITEM = "REMOVE-ITEM"

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id: id,
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat([action.payload])
    case REMOVE_ITEM:
      return state.filter((item) => item.itemId !== action.id)
    default:
      return state
  }
}

export default cartReducer
