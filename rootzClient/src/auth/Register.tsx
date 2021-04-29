import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

type AuthProps = {
    setToken: React.Dispatch<React.SetStateAction<string>>;
    setRole: React.Dispatch<React.SetStateAction<string>>;
};

type UserState = {
    username: string;
    password: string;
};

export class Register extends Component <AuthProps, UserState> {
    constructor (props: AuthProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }
    handleSubmit = (e: any) => {
        if (
            this.state.username !== ""  &&
            this.state.password !== ""
        ) {
            e.preventDefault();
            fetch('http://localhost:3000/user/create',{
                method: 'POST',
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                    admin: "false",
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
        }) 
            .then((response) => response.json()) 
            .then((data) => {
            this.props.setToken(data.setToken);
        });
        } else {
            alert("All fields must be completed");
        }
    };
    handleUsernameInput = (e: any) => {
        const username = e.target.value;
        this.setState({ username: username });
    };
  
    handlePasswordInput = (e: any) => {
        const password = e.target.value;
        this.setState({ password: password });
    };
    
    render (){
        return(
            <div id = "registerDiv">
                <h1 id="registerHeading">Register</h1>
                <ValidatorForm
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "35%",
                        display: "block",
                        backgroundColor: "#FFFFFF",
                    }}
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={(err) => console.log(err)}
                    >
                    <TextValidator
                        label="Username"
                        onChange={(e) => this.handleUsernameInput(e)}
                        name="Username"
                        value={this.state.username}
                        validators={["minStringLength:6", "required"]}
                        errorMessages={[
                        "Username should be more than 6 letters",
                        "this field is required",
                        ]}
                        autoComplete="off"
                    />
                    <TextValidator
                        label="Password"
                        onChange={this.handlePasswordInput}
                        name="password"
                        value={this.state.password}
                        type="password"
                        validators={["minStringLength:6", "required"]}
                        errorMessages={[
                        "password should be more than 8 letters",
                        "this field is required",
                        ]}
                    />
                    <br />
                    <Button variant="contained" onClick={this.handleSubmit}>
                        Register
                    </Button>
                    </ValidatorForm>
            </div>
        )
    }
}
