import { Add, Remove, ShoppingCartCheckout } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./singleproduct.css";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../api";
import { CartContext } from "../../context/cartContext/CartContext";
import { AuthContext } from "../../context/authContext/AuthContext";
import { createCart } from "../../context/cartContext/apiCalls";

const SingleProduct = () => {
  const location = useLocation();
  const prodId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [color, setPrdColor] = useState();
  const [size, setSelectedSize] = useState();
  const [quantity,setQuantity] = useState(1);

  const {user} = useContext(AuthContext);
  const {dispatch} = useContext(CartContext);
  
  // console.log(products,cartLength,total)

  const productId = product._id;
  const img = product.img;
  const price = product.price;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${api}/products/find/${prodId}`, {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [prodId]);


  const handleQuan = (type) => {
      if(type === "inc")
      {
         setQuantity(prev => prev+1)
      } else if(type === "dec")
      {
        quantity >1 && setQuantity(prev => prev-1)
      }
  }

  const handleAddToCart = (e) =>{
     e.preventDefault();
     createCart(user._id,{productId,img,size,color,price,quantity},dispatch);
  }

  return (
    <div>
      <div className="single-product-container">
        <div className="single-image-container">
          <img src={product.img} className="image-element" alt="" />
        </div>
        <div className="single-info-container">
          <h1 className="single-title">{product.title}</h1>
          <span className="single-desc">{product.desc}</span>
          <p className="price">Rs.{product.price}</p>
          <div className="single-filter-container">
            <div className="filter">
              <div className="filter-title">
                Color:
                {color ? (
                  <span style={{ color: color }}>{color}</span>
                ) : (
                  <span>select any color</span>
                )}
              </div>
              <div className="filterColors">
                {product.color?.map((clr,index) => (
                  <div
                    key={index}
                    className="filterColor"
                    style={{ backgroundColor: clr }}
                    onClick={() => setPrdColor(clr)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="filter">
              <div className="size-filter-title">Size : {size? <span className="selectedSize">{size}</span> : <span>select size</span> } </div>
              <div className="productSizes">
                {product.size?.map((s,index) => (
                  <div
                   key={index}
                    className="sizeFilter"
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="quantity-container">
            <div className="quantity">
              <Button onClick={()=>handleQuan("dec")}>
                <Remove />
              </Button>
              <span className="value">{quantity}</span>
              <Button onClick={()=>handleQuan("inc")}>
                <Add />
              </Button>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>
              <ShoppingCartCheckout style={{ marginRight: "10px" }} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
