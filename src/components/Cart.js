import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as IconDel } from "../icon-delete.svg"
import { removeItem } from "../redux/ducks/cart"

function Cart() {
  const items = useSelector((state) => state.cartItems)
  const dispatch = useDispatch()

  return (
    <div className="cart overflow-auto">
      <h5 className="py-2 border-bottom">cart</h5>
      {items.length === 0 && <div>cart is empty</div>}
      {items.map((item) => {
        return (
          <div
            key={item.itemId}
            className="d-flex align-items-center justify-content-between mb-4"
          >
            <img src={item.image} alt="img" width="40px" height="40px" />
            <div className="text-box text-black-50 ">
              <p className="cart-item-title">{item.title}</p>
              <p className="m-0">
                ${item.price} x {item.count}
                <span className="text-dark fw-bold ps-1">
                  ${item.count * item.price}
                </span>
              </p>
            </div>
            <div
              className="cart-remove"
              onClick={() => dispatch(removeItem(item.itemId))}
            >
              <IconDel />
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Cart
