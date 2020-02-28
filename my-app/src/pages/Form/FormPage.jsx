import React from "react";
import * as yup from "yup";
import { TextField } from "../../components/TextField/index";
import { SelectField } from "../../components/SelectField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "../../components/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { WithUserConsumer } from "../../contexts/HOC/withUserConsumer";

const GENDER = [
  { label: "select", value: "" },
  { label: "Male", value: "male" },
  { label: "Famale", value: "famale" }
];
class FormPage extends React.Component {
  state = {
    name: "",
    gender: "",
    email: "",
    mobile: "",
    address: "",
    error: {},
    touch: {},
    who: "",
    redirect: false,
    hasError: true
  };

  container = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-end",
    float: "right"
  };

  nameHandler = event => {
    this.setState({ name: event.target.value }, this.validation);
  };
  emailHandler = event => {
    this.setState({ email: event.target.value }, this.validation);
  };
  addressHandler = event => {
    this.setState({ address: event.target.value }, this.validation);
  };
  mobileHandler = event => {
    this.setState({ mobile: event.target.value }, this.validation);
  };
  genderHandler = event => {
    this.setState({ gender: event.target.value }, this.validation);
  };

  selectHandler = event => {
    const { touch } = this.state;
    touch.sports = true;
    this.setState({ sports: event.target.value, touch }, this.validation);
  };

  getErrors = value => {
    const { error } = this.state;
    if (this.isTouched(value) && this.hasErrors(value)) {
      return error[value];
    }

    return false;
  };

  hasErrors(value) {
    const { error } = this.state;
    return error[value];
  }

  isTouched(value) {
    const { touch } = this.state;
    if (touch[value]) {
      return true;
    }
    return false;
  }

  handleBlur = field => () => {
    const { touch } = this.state;
    touch[field] = true;
    console.log("on blur", field, touch);
    this.setState(
      {
        touch
      },
      this.validation
    );
  };

  validation() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required(" Name is required !")
        .min(3),
      sports: yup.string().required("Sport is required !"),
      who: yup.string().required("please select player type !")
    });

    const { name, sports, who } = this.state;
    schema
      .validate(
        {
          name,
          sports,
          who
        },
        { abortEarly: false }
      )
      .then(res => {
        if (res) {
          this.setState({
            hasError: false,
            error: {}
          });
        }
      })
      .catch(err => {
        console.log(err);
        const parsedError = [];
        err.inner.map(item => {
          if (!parsedError[item.path]) {
            parsedError[item.path] = item.message;
          }
          return null;
        });
        this.setState({
          hasError: true,
          error: parsedError
        });
      });
  }

  radioHandler = event => {
    const { touch } = this.state;
    touch.who = true;
    this.setState({ who: event.target.value, touch }, this.validation);
  };

  render() {
    const { name, email, mobile, gender, address } = this.state;
    console.log("PROPS", this.props);

    return (
      <Container>
        <h2> User Sign Up</h2>
        <Grid
          container
          spacing={3}
          className={{
            Width: "300px",
            boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.5)"
          }}
        >
          <Grid item xs={6}>
            <TextField
              value={this.props.name}
              name="name"
              disabled={false}
              label="Full Name : "
              onChange={e => this.props.handleChange("name", e.target.value)}
              error={this.getErrors("name")}
              onblur={this.handleBlur("name")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={this.props.address}
              name="address"
              disabled={false}
              label="Address : "
              onChange={e => this.props.handleChange("address", e.target.value)}
              error={this.getErrors("address")}
              onblur={this.handleBlur("address")}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              value={this.props.mobile}
              name="mobile"
              disabled={false}
              label="Mobile : "
              onChange={e => this.props.handleChange("mobile", e.target.value)}
              error={this.getErrors("mobile")}
              onblur={this.handleBlur("mobile")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={this.props.email}
              name={"email"}
              disabled={false}
              label="Email : "
              onChange={e => this.props.handleChange("email", e.target.value)}
              error={this.getErrors("email")}
              onblur={this.handleBlur("email")}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <SelectField
              value={this.props.gender}
              name="gender"
              onChange={e => this.props.handleChange("gender", e.target.value)}
              option={GENDER}
              label="Gender"
              error={this.getErrors("gender")}
              onblur={this.handleBlur("")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={this.props.pass}
              name={"pass"}
              disabled={false}
              label="Create Password : "
              onChange={e => this.props.handleChange("pass", e.target.value)}
              error={this.getErrors("pass")}
              onblur={this.handleBlur("pass")}
            />
          </Grid>
        </Grid>

        <>
          <div style={this.container}>
            <Button value="Cancel" disabled={false} />
            <Button
              value="Submit"
              onClick={() => {
                console.log("redirect true");
                this.setState({
                  redirect: true
                });
              }}
            />
            {this.state.redirect ? <Redirect to="/login" /> : ""}
          </div>
        </>
      </Container>
    );
  }
}
// FormPage = WithUserConsumer(FormPage);
export default WithUserConsumer(FormPage);
