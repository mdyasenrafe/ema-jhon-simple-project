import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import UseAuth from "../../Context/UseAuth";
import "./Login.css";
const Login = () => {
  const { signInUsingGoogle, signInWithEmail } = UseAuth();

  const location = useLocation();
  // console.log(location.state?.from);
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmail(data.email, data.password)
      .then((result) => {
        history.push(redirect_url);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-form">
      <div>
        <h3>Log in</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" {...register("email", { required: true })} />
          <br />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          {/* include validation with required or other standard HTML validation rules */}
          <input
            type="password"
            {...register("password", { required: true })}
          />
          <br />
          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="error">This field is required</span>
          )}

          <input type="submit" />
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
