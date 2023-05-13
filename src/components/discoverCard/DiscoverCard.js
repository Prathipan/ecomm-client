import { Link, useNavigate } from "react-router-dom";
import "./discovercard.css";

const DiscoverCard = ({ card }) => {
  // console.log(card)
  return (
    <div className="card-container">
      <div className="card-wrapper" style={{backgroundColor : card.color}}>
      <div className="card-info">
        <span>{card.title}</span>
        <h2>{card.heading}</h2>
        <Link to={card.category ? `/products/${card.category}` : `/products`}>
        <button className="showBtn">Show me all</button>
        </Link>
      </div>
      <img className="cardImg" src={card.img} alt="" />
      </div>
    </div>
  );
};

export default DiscoverCard;
