import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="container bg-light border-bottom border-secondary">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MyStore
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
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
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar
