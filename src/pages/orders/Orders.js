import { useContext, useState } from "react"
import "./orders.css"
import { useEffect } from "react"
import axios from "axios"
import { api } from "../../api"
import { AuthContext } from "../../context/authContext/AuthContext"
import OrderDetails from "./OrderDetails"

const Orders = () => {
  const [orders,setOrders] = useState([])

  const {user} = useContext(AuthContext)

  // console.log(user)

  useEffect(()=>{
    const getOrders = async() => {
      try {
        const res = await axios.get(`${api}/order/get-orders/${user._id}`,{
          headers : {
            token : `${JSON.parse(localStorage.getItem("user")).accessToken}`
          }
        });
        setOrders(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getOrders();
  },[])

  return (
    <div className="order-container">
        <h1 className="order-title">My Orders</h1>
        <div className="order-details">
         {
          orders.map((order)=>{
            return <OrderDetails key={order._id} order={order} />
          })
         }
        </div>
    </div>
  )
}

export default Orders