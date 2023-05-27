import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import "./orders.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { api } from "../../api"
import { ArrowBack } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"

const OrderedProducts = ({product}) => {
    const navigate = useNavigate()
   const [data,setData] = useState({})

    useEffect(()=>{
     const getData = async() => {
       const res = await axios.get(`${api}/products/find/${product.productId}`,{
        headers : {
            token : `${JSON.parse(localStorage.getItem("user")).accessToken}`
        }
       })
       setData(res.data)
     }
     getData()
    },[product])
   
  return (
    <Card sx={{ maxWidth: 345 }} className="order-card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" className="card-details">
            Id : {data._id}<br />
            Color : {product.color}<br/>
            Quantity : {product.quantity}<br />
            Price : {data.price}
          </Typography>
          <button onClick={()=>navigate(-1)} className="back"><ArrowBack />Back</button>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default OrderedProducts