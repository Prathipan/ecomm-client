import {
  LockPerson,
  MailOutline,
  Person
} from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const Login = () => {
  const { isFetching, dispatch } = useContext(AuthContext);

  const loginValidation = yup.object({
    email: yup.string().required("*Please enter email address").min(5),
    password: yup.string().required("*Please enter your password").min(6),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (loginDetails) => {
      login(loginDetails, dispatch);
    },
  });

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="form-right">
          <form className="form-container" onSubmit={formik.handleSubmit}>
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
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <span style={{color : "red"}}>{formik.touched.userName && formik.errors.userName
              ? formik.errors.userName
              : ""}</span>
            <div className="input-box">
              <MailOutline className="form-icon" />
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <span style={{color : "red"}}>{formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}</span>
            <div className="input-box">
              <LockPerson className="form-icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <span style={{color : "red"}}>{formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}</span>
            
            <div>
              {isFetching ? (
                <CircularProgress className="progress-bar" color="success" />
              ) : (
                <button className="register-button" type="submit">
                  Login
                </button>
              )}
            </div>
            <div className="text-bottom">
              <hr style={{ width: "90%", color: "gray", marginTop: "25px" }} />
              <Link to={`/register`}>
                <button className="signIn-btn">Sign up</button>
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
