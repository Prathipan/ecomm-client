import { Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import { CartContext } from "../../context/cartContext/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const { dispatch } = useContext(AuthContext);
  const {cartLength} = useContext(CartContext);

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left">
          <Link to="/home" className="nav-logo">
            <h1>Shop Zone</h1>
          </Link>
        </div>
        <div className="center">
          <ul className="listItems">
            <Link to={"/products"} className="item">
              <li>All Products</li>
            </Link>
            <Link to={"/products/men"} className="item">
              <li>Men</li>
            </Link>
            <Link to={"/products/women"} className="item">
              <li>Women</li>
            </Link>
            <Link to={"/products/sports"} className="item">
              <li>Sports</li>
            </Link>
          </ul>
        </div>
        <div className="right">
          <SearchIcon className="icon" />

          <div>
            <Person2Outlined
              className="icon"
              onClick={() => setShow((prev) => !prev)}
            />
            {show ? (
              <div className="options">
                <span>Profile</span>
                <span style={{ border: "none" }} onClick={handleLogout}>
                  Log Out
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="icon">
            <Badge badgeContent={cartLength} color="primary" onClick={()=>navigate("/cart")}>
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
