import axios from "axios"
import { createCartAction, deleteCartAction, getCartAction } from "./CartActions"
import { api } from "../../api"


export const getCart = async(userId,dispatch) => {
    try {
        const res = await axios.get(`${api}/cart/find/${userId}`,{
            headers : {
                token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        })
       dispatch(getCartAction(res.data));
    } catch (error) {
        console.log(error)
    }
}

export const createCart = async(userId,cartItems,dispatch) => {
  try {
    const res = await axios.post(`${api}/cart/add-cart/${userId}`,cartItems,{
        headers : {
            token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
    })
    // console.log(cartItems)
    dispatch(createCartAction(res.data))
  } catch (error) {
    console.log(error)
  }
}

export const deleteCart = async(productId,userId,dispatch) =>{
    try {
        const res = await axios.delete(`${api}/cart/${userId}/${productId}`,{
            headers : {
                token : `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`
            }
        })
        dispatch(deleteCartAction(res.data))
    } catch (error) {
        console.log(error)
    }
}