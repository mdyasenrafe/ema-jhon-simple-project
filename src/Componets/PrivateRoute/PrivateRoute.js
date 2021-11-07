import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Context/UseAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  console.log(isLoading);
  if (isLoading) {
    return <h1>This is Loading</h1>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
