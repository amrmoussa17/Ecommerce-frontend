import "./App.css"
import "./components/ProductCard"
import ProductsList from "./components/ProductsList"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ProductsList />} />
        <Route path="/products/cat/:category" element={<ProductsList />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
      </Routes>
    </>
  )
}

export default App
