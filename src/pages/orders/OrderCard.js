import "./orders.css";
import { useLocation } from "react-router-dom";
import OrderedProducts from "./OrderedProducts";

const OrderCard = () => {
  const location = useLocation();
  const products = location.state;

  return (
    <>
      <h1 className="order-heading">Ordered Products</h1>
      <div className="ordered-products-comp">
        {products.map((product) => {
          return <OrderedProducts product={product} />;
        })}
      </div>
    </>
  );
};

export default OrderCard;
