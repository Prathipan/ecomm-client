import { Call, LockPerson, MailOutline, Person } from "@mui/icons-material";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api } from "../../api";

const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${api}/auth/register`, userDetails);
      navigate("/");
      setUserDetails({
        userName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="form-left">
          <div>
            <h1 style={{ textAlign: "center" }}>Welcome folks!!</h1>
            <p >
              To keep connected with us please login with your personal info
            </p>
            <Link to={`/`}>
              <button className="signIn-btn">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="form-right">
          <form className="form-container">
            <h1>Create Account</h1>
            <div className="input-box">
              <Person className="form-icon" />
              <input
                className="input-field"
                type="text"
                placeholder="User Name"
                name="userName"
                value={userDetails.userName}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <MailOutline className="form-icon" />
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <Call className="form-icon" />
              <input
                className="input-field"
                type="number"
                placeholder="Mobile"
                name="mobile"
                value={userDetails.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <LockPerson className="form-icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <LockPerson className="form-icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={userDetails.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="terms-conditions">
              <input type="checkbox" checked />I have read the terms and
              conditions for creating an account
            </div>
            <button
              className="register-button"
              variant="contained"
              onClick={handleSubmit}
            >
              Register
            </button>
            <div className="text-bottom">
              <hr style={{width: "90%",color : "gray",marginTop : "25px"}} />
              <Link to={`/`}>
                <button className="signIn-btn">Sign In</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
