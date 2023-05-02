import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import Products from "../../components/products/Products";
import "./productlist.css";
import Products from "../../components/products/Products";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const categ = location.pathname.split("/")[2];
  // console.log(categ);
  const [sort,setSort] = useState("newest")

  return (
    <div className="product-list-container">
      <div className="filter-container">
        <div className="filter-product">
          <span className="filter-text">Sort By :</span>
          <select className="product-select" onChange={e=>setSort(e.target.value)}>
            <option value="newest">Newest First</option>
            <option value="asc">Price (Asc)</option>
            <option value="dsc">Price (Dsc)</option>
          </select>
        </div>
      </div>
      <Products categ={categ} />
    </div>
  );
};

export default ProductList;
