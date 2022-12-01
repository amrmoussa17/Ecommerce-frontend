import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ReactComponent as CartLogo } from "../cart.svg"
import Cart from "./Cart"

function NavBar() {
  const toggleCart = () => {
    const cart = document.querySelector(".cart")
    if (cart.style.display === "none") {
      cart.style.display = "block"
    } else {
      cart.style.display = "none"
    }
  }
  const cart = useSelector((state) => state.cartItems)

  return (
    <div className="main-nav container bg-light border-bottom border-secondary">
      <nav className="navbar navbar-expand-lg navbar-light  ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MyStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  All
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="products/cat/electronics"
                  className="nav-link"
                  aria-current="page"
                >
                  Electronics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products/cat/jewelery"
                  className="nav-link"
                  aria-current="page"
                >
                  Jewelery
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products/cat/men"
                  className="nav-link"
                  aria-current="page"
                >
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products/cat/women"
                  className="nav-link"
                  aria-current="page"
                >
                  Women
                </Link>
              </li>
            </ul>
            <span
              className="navbar-text"
              style={{ cursor: "pointer" }}
              onClick={toggleCart}
            >
              <CartLogo style={{ color: "hsl(219, 9%, 45%)" }} />

              <div
                className="count"
                style={{ display: cart.length > 0 ? "flex" : "none" }}
              >
                {cart.length}
              </div>
            </span>
          </div>
        </div>
      </nav>
      <Cart />
    </div>
  )
}
export default NavBar
