import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import "./Login.css";
const Login = () => {
  const { signInUsingGoogle } = UseAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/shop";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_url);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-form">
      <div>
        <h3>Log in</h3>
        <form>
          <input type="text" placeholder="Enter Your Email" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          new To ema-john ? <Link to="/resigter">Create Aceount</Link>
        </p>
        <div>---------or------------</div>
        <button onClick={handleGoogleLogin} className="btn">
          Gogle Sign in Here
        </button>
      </div>
    </div>
  );
};

export default Login;
