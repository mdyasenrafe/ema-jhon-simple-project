import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseAuth from "../../Context/UseAuth";

const Register = () => {
  const { signInUsingGoogle, createUserWithEmail, updateUser } = UseAuth();
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
    watch,
    formState: { errors },
  } = useForm();

  const handleEmailCreate = (data) => {
    console.log(data.name);
    createUserWithEmail(data.email, data.password)
      .then((result) => {
        updateUser(data.name);
        history.push(redirect_url);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="login-form">
      <div>
        <h2>Create Aceount</h2>
        <form onSubmit={handleSubmit(handleEmailCreate)}>
          <input
            placeholder="Enter Your Name"
            {...register("name", { required: true })}
          />
          <br />
          {errors.name && <span className="error">This field is required</span>}

          <input
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />

          <br />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            type="password"
            placeholder="Enter Your Password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
              pattern: /(?=.*?[#?!@$%^&*-])/g,
            })}
          />
          <br />
          {errors?.password?.type === "required" && (
            <span className="error">This field is required</span>
          )}
          {errors?.password?.type === "minLength" && (
            <span className="error">Pasword Minimum eight in length</span>
          )}
          {errors?.password?.type === "maxLength" && (
            <span className="error">Pasword Maxium 20 in length</span>
          )}
          {errors?.password?.type === "pattern" && (
            <span className="error">
              Password At least one special character,
            </span>
          )}
          {/* <input
            type="password"
            {...register("confirm_passoword", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
            placeholder="Confirm Password"
          />
          <br />
          {errors?.confirm_passoword?.type === "required" && (
            <span className="error">This field is required</span>
          )}
          {errors.confirm_password?.type === "validate" && (
            <span className="error">Passwords don't match.</span>
          )} */}

          <br />
          <input type="submit" />
        </form>
        <p>
          Alread Have An Aceount <Link to="/login">Log in Here</Link>
        </p>
        <div>---------or------------</div>
        <button className="btn" onClick={handleGoogleLogin}>
          Gogle Sign in
        </button>
      </div>
    </div>
  );
};

export default Register;
