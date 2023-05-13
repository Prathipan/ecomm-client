import { LockPerson, MailOutline, Person } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loginDetails.userName === "" ||
      loginDetails.email === "" ||
      loginDetails.password === ""
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
        login(loginDetails, dispatch);
        setLoginDetails({
          userName: "",
          email: "",
          password: "",
        });
      } catch (error) {
        console.log(error);
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
        <div className="form-right">
          <form className="form-container">
            <h1>Login into an Account</h1>
            <div className="credentials">
              <span>User Name : Test User || </span>
              <span>email : testUser@gmail.com || </span>
              <span>Password : 123456</span>
            </div>
            <div className="input-box">
              <Person className="form-icon" />
              <input
                className="input-field"
                type="text"
                placeholder="User Name"
                name="userName"
                value={loginDetails.userName}
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
                value={loginDetails.email}
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
                value={loginDetails.password}
                onChange={handleChange}
              />
            </div>
            {isFetching ? (
              <CircularProgress className="progress-bar" color="success" />
            ) : (
              <button className="register-button" onClick={handleSubmit}>
                Login
              </button>
            )}

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
              <Link to={`/register`}>
                <button className="signIn-btn">Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="form-left">
          <div>
            <h1 style={{ textAlign: "center" }}>Welcome folks!!</h1>
            <p>To get your products please create an account with us.</p>
            <Link to={`/register`}>
              <button className="signIn-btn">SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
