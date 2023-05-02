import "./orders.css"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import OrderedProducts from "./OrderedProducts";

const OrderCard = () => {
    const location = useLocation();
    const products = location.state;

  return (
    <div className="ordered-products-comp">
        <h1>Ordered Products</h1>
        {
            products.map((product)=>{
                return <OrderedProducts product={product} />
            })
        }
    </div>
  )
}

export default OrderCard