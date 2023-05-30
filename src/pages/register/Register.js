import { Call, LockPerson, MailOutline, Person } from "@mui/icons-material";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../api";
import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const registraionValidation = yup.object({
    userName: yup.string().required("*Please enter your name").min(3),
    email: yup.string().required("*Please enter your email").min(5),
    mobile: yup
      .string().min(10)
      .required("*Please enter your mobile number")
      .matches(phoneRegExp, "Phone number is not valid"),
    password: yup.string().required("*Password is required"),
    confirmPassword: yup
      .string()
      .required("*Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registraionValidation,
    onSubmit: async (userDetails, { resetForm }) => {
      try {
        const res = await axios.post(`${api}/auth/register`, userDetails);
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
        resetForm();
        navigate("/");
      } catch (error) {
        // console.log(error)
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
    },
  });

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
          <form className="form-container" onSubmit={formik.handleSubmit}>
            <h1>Create Account</h1>
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
            <span style={{ color: "red" }}>
              {formik.touched.userName && formik.errors.userName
                ? formik.errors.userName
                : ""}
            </span>
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
            <span style={{ color: "red" }}>
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </span>
            <div className="input-box">
              <Call className="form-icon" />
              <input
                className="input-field"
                type="number"
                placeholder="Mobile"
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <span style={{ color: "red" }}>
              {formik.touched.mobile && formik.errors.mobile
                ? formik.errors.mobile
                : ""}
            </span>
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
            <span style={{ color: "red" }}>
              {formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ""}
            </span>
            <div className="input-box">
              <LockPerson className="form-icon" />
              <input
                className="input-field"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <span style={{ color: "red" }}>
              {formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formik.errors.confirmPassword
                : ""}
            </span>
            {/* <div className="terms-conditions">
              <input type="checkbox" checked />I have read the terms and
              conditions for creating an account
            </div> */}
            <button
              className="register-button"
              variant="contained"
              type="submit"
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
