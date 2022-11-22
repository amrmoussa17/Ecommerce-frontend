import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { ReactComponent as CartLogo } from "../cart.svg"
import { fetchProductInfo, removeProductInfo } from "../redux/ducks/product"

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
              <span className="inc-symbol fs-4 px-1 fw-bold">-</span>
              <span className="fs-5 px-4">0</span>
              <span className="inc-symbol fs-4 px-1 fw-bold">+</span>
            </div>
            <div className="cart-btn">
              <CartLogo style={{ transform: "scale(0.8)" }} /> Add to cart
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductInfo
