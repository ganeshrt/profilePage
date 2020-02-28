import React from "react";
import { UserContext } from "../UserProvider/UserProvider";

export const WithUserConsumer = WrappedComponent => {
  console.log(" WithSanck bar");
  const WrapUserConsumer = props => (
    <UserContext.Consumer>
      {({ name, email, address, mobile, gender, pass, handleChange }) => {
        const snackBarProps = {
          name,
          email,
          address,
          mobile,
          gender,
          pass,
          handleChange
        };
        return <WrappedComponent {...props} {...snackBarProps} />;
      }}
    </UserContext.Consumer>
  );
  return WrapUserConsumer;
};
