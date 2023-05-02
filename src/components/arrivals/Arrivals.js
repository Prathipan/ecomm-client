import { products } from "../../data";
import ProductCard from "../product/ProductCard";
import "./arrivals.css";

const Arrivals = () => {
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
                return <ProductCard item={item} key={item.id} />
            })
           }
        </div>
    </div>
  );
};

export default Arrivals;
