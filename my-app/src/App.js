import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import { FormPage } from './pages/Form';
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import ProfileArea from './pages/Profile/ProfilePage';
import { NotFound } from './pages/NotFound';
import PrivateRoute from "./routes/Privateroute";
import AuthRoute from "./routes/Authroute";
import UserProvider from './contexts/UserProvider/UserProvider';
export const userData = React.createContext();
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      mobile: "",
      gender: "",
      address: "",
    };
  }
  render() {
    return (<>
      {/* <NavLink></NavLink> */}
      <UserProvider>
        <Router>
          <Switch>

            <PrivateRoute exact path="/" component={FormPage} />
            <AuthRoute exact path="/login" component={Login} />
            <PrivateRoute exact path="/form" component={FormPage} />
            <PrivateRoute exact path="/profile" component={ProfileArea} />
            <PrivateRoute component={NotFound} />
          </Switch>
        </Router>
      </UserProvider>
    </>
    );
  }
}

export default App;
