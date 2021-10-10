import React from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../Hooks/UseFirebase";

const Register = () => {
  const { signInUsingGoogle } = UseFirebase();
  return (
    <div className="login-form">
      <div>
        <h2>Create Aceount</h2>
        <form>
          <input type="text" name="name" placeholder="Enter Your Name" />
          <br />
          <input type="text" name="email" placeholder="Enter Your Email " />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="R-Enter Your Password"
          />
          <br />
        </form>
        <p>
          Alread Have An Aceount <Link to="/login">Log in Here</Link>
        </p>
        <div>---------or------------</div>
        <button className="btn" onClick={signInUsingGoogle}>
          Gogle Sign in
        </button>
      </div>
    </div>
  );
};

export default Register;
