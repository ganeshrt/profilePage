import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import WarningIcon from "@material-ui/icons/Warning";
import { withStyles } from "@material-ui/styles";
import { amber, green } from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import clsx from "clsx";

export const UserContext = React.createContext();
class UserProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      mobile: "",
      gender: "",
      address: "",
      pass: ""
    };
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { children } = this.props;

    return (
      <UserContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
