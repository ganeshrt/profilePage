import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { Authlayouts } from "../layouts/Authlayouts";

const AuthRoute = ({ component: Component, token, ...rest }) => (
  <Route {...rest} render={matchProps => <Component {...matchProps} />} />
);

export default AuthRoute;
