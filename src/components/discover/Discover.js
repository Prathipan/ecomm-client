import { cardDetails } from "../../data";
import DiscoverCard from "../discoverCard/DiscoverCard";
import "./discover.css";

const Discover = () => {
  return (
    <div className="discover-container">
      <div className="discover-headings">
        <h1>
          Discover more.
          <span style={{ color: "gray" }}>Good things are waiting for you</span>
        </h1>
      </div>
      <div className="discover-card">
        {cardDetails.map((card, index) => {
          return <DiscoverCard key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default Discover;
