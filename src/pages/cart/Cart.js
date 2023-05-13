import "./cart.css";
import { Breadcrumbs, Typography } from "@mui/material";
import CartProduct from "./CartProduct";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getCart } from "../../context/cartContext/apiCalls";
import axios from "axios";
import { api } from "../../api";

const Cart = () => {
  const {user} = useContext(AuthContext);
  const {products,total, dispatch : dispatchCart} = useContext(CartContext)

  useEffect(()=>{
    getCart(user._id,dispatchCart)
  },[dispatchCart])

  const handleCheckout = async() => {
    const res = await axios.post(`${api}/order/checkout/${user._id}`,{
      user,
      products,
      total
    });
    if(res.data.url)
    {
      window.location.href = res.data.url
    }
  }


 
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <h1 className="cart-title">Shopping Cart</h1>
        <Breadcrumbs aria-label="breadcrumb">
          <Link style={{textDecoration:"none",color:"inherit"}} to="/home">
            Home
          </Link>
          <Link
          style={{textDecoration:"none",color:"inherit"}}
            to="/products"
          >
            Products
          </Link>
          <Typography color="text.primary">Shopping Cart</Typography>
        </Breadcrumbs>
        <hr style={{backgroundColor : "gray", margin : "50px 0" , opacity : "0.5"}} />
        <div className="bottom">
          <div className="info">
            <>
            {
               products.map((product) =>{
                return <><CartProduct key={product._id}  product={product} /><hr/></>
              })
            }
            </>
          </div>
          <div className="summary">
            <h1 className="summaryTitle">Order Summary</h1>
            <div className="summaryItem">
              <span className="summaryText">Sub Total</span>
              <span className="summaryPrice">Rs.{total}</span>
            </div>
            <div className="summaryItem">
              <span className="summaryText">Shipping Charge</span>
              <span className="summaryPrice">+ Rs.55</span>
            </div>
            <div className="summaryItem">
              <span className="summaryText">Discount</span>
              <span className="summaryPrice">- Rs.55</span>
            </div>
            <div
              className="summaryItem"
              style={{ fontWeight: "500", fontSize: "24px" }}
            >
              <span className="summaryText">Total</span>
              <span className="summaryPrice">Rs.{total}</span>
            </div>
            <button className="checkoutButton" onClick={handleCheckout}>Checkout Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
