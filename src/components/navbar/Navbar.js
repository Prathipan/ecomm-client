import { Person2Outlined, ShoppingCartOutlined } from "@mui/icons-material";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
import { CartContext } from "../../context/cartContext/CartContext";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const { user, dispatch } = useContext(AuthContext);
  const { cartLength } = useContext(CartContext);

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
              {/* <Person2Outlined
                className="icon"
                onClick={() => setShow((prev) => !prev)}
              /> */}
              <Avatar style={{cursor : "pointer"}} onClick={() => setShow((prev) => !prev)}>{user.userName[0]}</Avatar>
            {show ? (
              <div className="options">
                
                <span onClick={()=>navigate("/my-orders")}>My Orders</span>
                <span style={{ border: "none" }} onClick={handleLogout}>
                  Log Out
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="icon">
            <Badge
              badgeContent={cartLength}
              color="primary"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartOutlined />
            </Badge>
          </div>
          <div className="toggle">
            <MenuIcon onClick={() => setToggle((prev) => !prev)} />
            {toggle ? (
              <ul className="toggleList">
                <Link to={"/products"} className="toggleItem">
                  <li>All Products</li>
                </Link>
                <Link to={"/products/men"} className="toggleItem">
                  <li>Men</li>
                </Link>
                <Link to={"/products/women"} className="toggleItem">
                  <li>Women</li>
                </Link>
                <Link to={"/products/sports"} className="toggleItem">
                  <li>Sports</li>
                </Link>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
