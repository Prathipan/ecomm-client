import React, { useContext, useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import { AuthContext } from '../context/authContext/AuthContext'
import { CartContext } from '../context/cartContext/CartContext'
import { getCart } from '../context/cartContext/apiCalls'

const Portal = () => {
  
  const {user} = useContext(AuthContext);
  const {products,total, dispatch} = useContext(CartContext)

  useEffect(()=>{
    getCart(user._id,dispatch)
  },[dispatch])

  return (
    <>
     <Navbar />
     <Outlet />
     <Footer />
    </>
  )
}

export default Portal