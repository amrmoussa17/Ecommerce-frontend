import ProductCard from "./ProductCard"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchProducts } from "../redux/ducks/product"

function ProductsList() {
  let { category } = useParams()
  if (category === "men") {
    category = "men's clothing"
  }
  if (category === "women") {
    category = "women's clothing"
  }

  const allProducts = useSelector((State) => State.allProducts.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="container py-4 bg-light">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {category &&
          allProducts
            .filter((item) => item.category === category)
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        {!category &&
          allProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  )
}

export default ProductsList
