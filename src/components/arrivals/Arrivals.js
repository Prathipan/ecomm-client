import { useEffect, useState } from "react";
// import { products } from "../../data";
import ProductCard from "../product/ProductCard";
import "./arrivals.css";
import axios from "axios";
import { api } from "../../api";

const Arrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${api}/products`,
          {
            headers: {
              token: `Bearer ${
                JSON.parse(localStorage.getItem("user")).accessToken
              }`,
            },
          }
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="arrival-container">
      <div className="arrival-headings">
        <h1>
          New arrivals.
          <span style={{ color: "gray" }}>Rey shirts & pants</span>
        </h1>
      </div>
      <div className="arrival-card">
           {
            products.splice(0,4).map((item)=>{
                return <ProductCard item={item} key={item._id} />
            })
           }
        </div>
    </div>
  );
};

export default Arrivals;
