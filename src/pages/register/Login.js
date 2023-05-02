import { LockPerson, MailOutline, Person } from "@mui/icons-material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(loginDetails, dispatch);
      setLoginDetails({
        userName: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="form-right">
          <form className="form-container">
            <h1>Login into an Account</h1>
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

            <button className="register-button" onClick={handleSubmit}>
              Login
            </button>
            <div className="text-bottom">
              <hr style={{width: "90%",color : "gray",marginTop : "25px"}} />
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
