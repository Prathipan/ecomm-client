import "./products.css";
import ProductCard from "../product/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../../api";

const Products = ({ categ }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${api}/products?${categ ? "category=" + categ : ""}`,
          {
            headers: {
              token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`,
            },
          }
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [categ]);

  return (
    <div className="products-container">
      {products.map((item) => {
        return <ProductCard key={item._id} item={item} />;
      })}
    </div>
  );
};

export default Products;
