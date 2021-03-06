import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

type AuthProps = {
    sessionToken: React.Dispatch<React.SetStateAction<string>>;
    setRole: React.Dispatch<React.SetStateAction<string>>;
};

type UserState = {
    email: string;
    password: string;
};

export class Login extends Component <AuthProps, UserState> {
    constructor(props: AuthProps) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleSubmit = (e: any) => {
      if (this.state.email !== "" && this.state.password !== "") {
        e.preventDefault();
        fetch('http://localhost:3000/user/login',{
          method: 'POST',
          body: JSON.stringify({ user: {
            email: this.state.email,
            password: this.state.password,
            }  }),
          headers: new Headers({
              "Content-Type": "application/json",
          }),
        }) 
          .then((res) => {
              if (res.status !== 200) {
                throw new Error("Username or Password is incorrect or does not exist");
              } else return res.json();
            }) 
            .then((data) => {
                console.log(data);
                this.props.sessionToken(data.sessionToken);
                this.props.setRole(data.user.isAdmin);
                console.log("User logged in");
                <Redirect to="/product/" />
            })
            .catch((err) => alert(err));
      } else {
          alert("Email / Password cannot be blank")
      }
  };

  handleUsernameInput = (e: any) => {
      const username = e.target.value;
      this.setState({ email: username });
  };

  handlePasswordInput = (e: any) => {
      const password = e.target.value;
      this.setState({ password: password });
  };

  render () {
      return (
          <div id="loginDiv">
              <h1 id="loginHeading">Login</h1>
              <ValidatorForm
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "35%",
                        display: "block",
                        backgroundColor: "#FFFFFF",
                    }}
                    ref="form"
                    variant="outlined"
                    onSubmit={this.handleSubmit}
                    onError={(errors) => console.log(errors)}
                    >
                    <TextValidator
                        label="Username"
                        onChange={this.handleUsernameInput}
                        name="username"
                        value={this.state.email}
                        validators={["minStringLength:6", "required"]}
                        autoComplete="off"
                    />
                    <TextValidator
                        label="Password"
                        onChange={this.handlePasswordInput}
                        name="password"
                        type="password"
                        validators={["minStringLength:6", "required"]}
                        errorMessages={["this field is required"]}
                        value={this.state.password}
                    />
                    <br />
                    <Button variant="contained" onClick={this.handleSubmit}>
                        Login
                    </Button>
                    </ValidatorForm>
          </div>
      );
  }
}