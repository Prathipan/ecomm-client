import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductList from "./pages/productList/ProductList";
import SingleProduct from "./pages/singleproduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Register from "./pages/register/Register";
import Login from "./pages/register/Login";
import Portal from "./pages/Portal";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Success from "./pages/success/Success";

function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> :<Login />} />
          <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />
          <Route path="/" element={user ? <Portal /> : <Navigate to="/" />}>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:category" element={<ProductList />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout-success" element={<Success />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
