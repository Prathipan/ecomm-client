import { Call, LockPerson, MailOutline, Person } from "@mui/icons-material";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { api } from "../../api";
import { ToastContainer, toast } from "react-toastify";

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
    if (
      userDetails.userName === "" ||
      userDetails.email === "" ||
      userDetails.mobile === "" ||
      userDetails.password === "" ||
      userDetails.confirmPassword === ""
    ) {
      toast.warn("Enter all mandatory fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
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
        toast.success("Account Created Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (error) {
        // console.log(error);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="form-left">
          <div>
            <h1 style={{ textAlign: "center" }}>Welcome folks!!</h1>
            <p>
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
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <div className="text-bottom">
              <hr style={{ width: "90%", color: "gray", marginTop: "25px" }} />
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
