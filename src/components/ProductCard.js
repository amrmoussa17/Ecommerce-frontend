function ProductCard({ product }) {
  return (
    <div className="col">
      <div className="card" style={{ height: "100%" }}>
        <div className="text-center border-bottom  py-3">
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            width="150px"
            height="150px"
            style={{ width: "150px" }}
          />
        </div>
        <div className="card-body text-center text-sm-start">
          <p
            className="card-text fs-6 overflow-hidden"
            style={{ height: "50px" }}
          >
            {product.title}
          </p>
          <p className="fw-bold mb-0">${product.price}</p>
          <p className="text-black-50 mb-0">{product.category}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
