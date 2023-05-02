import { useNavigate } from "react-router-dom"
import "./productCard.css"

const ProductCard = ({item}) => {
  const navigate = useNavigate();

  return (
    <div className="product-card-container">
        <img className="product-img" src={item.img} alt="" />
        <div className="card-info">
            <span className="item-name">{item.title}</span>
            <span className="item-sub">{item.desc}</span>
            <div className="btn-wrapper">
              <span className="card-price">Rs.{item.price}</span>
              <button className="view-button" onClick={()=>navigate(`/product/${item._id}`)}>View Product</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard