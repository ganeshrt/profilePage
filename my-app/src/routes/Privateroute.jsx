import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { Privatelayouts } from "../layouts/Privatelayouts";

const PrivateRoute = ({ component: Component, token, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <>
        <Component {...matchProps} />
      </>
    )}
  />
);

export default PrivateRoute;
