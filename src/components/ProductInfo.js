import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ReactComponent as CartLogo } from "../cart.svg"
import { fetchProductInfo, removeProductInfo } from "../redux/ducks/product"
import { addItem } from "../redux/ducks/cart"
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom"

function ProductInfo() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.productInfo)
  useEffect(() => {
    dispatch(fetchProductInfo(id))
    return () => {
      dispatch(removeProductInfo())
    }
  }, [])
  const [count, setCount] = useState(1)

  const updateCart = (item, countValue) => {
    dispatch(addItem({ ...item, count: countValue, itemId: uuidv4() }))
  }

  return Object.keys(product).length === 0 ? (
    <div className="container mt-5">Loading....</div>
  ) : (
    <>
      <div className="product-info py-5 container d-lg-flex justify-content-center align-items-start gap-5 ">
        <div className="px-4 text-center">
          <img src={product.image} width="300" height="400" alt="img" />
        </div>
        <div className="text-box p-4">
          <h3 className="fw-bold mb-4">{product.title}</h3>
          <p className="text-black-50">{product.description}</p>
          <p className="fw-bold fs-4 h3">${product.price}</p>
          <div className="d-flex align-items-center gap-4 py-5">
            <div className="increment-control bg-light d-flex align-items-center">
              <span
                className="inc-symbol fs-4 px-1 fw-bold"
                onClick={() =>
                  setCount((prevCount) => {
                    if (prevCount > 1) {
                      return prevCount - 1
                    }
                    return prevCount
                  })
                }
              >
                -
              </span>
              <span className="fs-5 px-4">{count}</span>
              <span
                className="inc-symbol fs-4 px-1 fw-bold"
                onClick={() => setCount((prevCount) => prevCount + 1)}
              >
                +
              </span>
            </div>
            <div>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div
                  className="cart-btn"
                  onClick={() => updateCart(product, count)}
                >
                  <CartLogo
                    style={{ color: "white", transform: "scale(0.8)" }}
                  />
                  Add to cart
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductInfo
