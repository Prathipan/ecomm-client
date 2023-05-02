import { Delete } from '@mui/icons-material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext/CartContext'
import { AuthContext } from '../../context/authContext/AuthContext'
import { deleteCart } from '../../context/cartContext/apiCalls'

const CartProduct = ({product}) => {

  const {user} = useContext(AuthContext)
  const {dispatch} = useContext(CartContext)
  // console.log(products,total)


  const handleDelete = (productId)  => {
    // console.log(productId)
    deleteCart(productId,user._id,dispatch)
  }

  return (
    <div className="product">
                <div className="product-details">
                  <img
                    src={product.img}
                    className="cart-image"
                    alt=""
                  />
                  <div className="cart-product-info">
                    <span className="cart-product-name">
                      <b>Product Name:</b> {product.title}
                    </span>
                    <span className="cart-product-id">
                      <b>Product Id:</b> {product._id}
                    </span>
                    <div
                      className="cart-product-color"
                      style={{ backgroundColor: product.color }}
                    ></div>
                    <span className="cart-product-size">
                      <b>Product Size:</b> {product.size}
                    </span>
                  </div>
                </div>
                <div className="cart-price-details">
                  <div className="cart-amount">
                    <span>Quantity : {product.quantity}</span>
                  </div>
                  <div className="cart-price">Rs.{product.price * product.quantity}</div>
                  <div className="deleteIcon">
                    <Delete onClick={()=>handleDelete(product.productId)} />
                  </div>
                </div>
              </div>
  )
}

export default CartProduct