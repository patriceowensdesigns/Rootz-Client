import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

type AuthProps = {
    setToken: React.Dispatch<React.SetStateAction<string>>;
    setRole: React.Dispatch<React.SetStateAction<string>>;
};

type UserState = {
    email: string;
    password: string;
};

export class Register extends Component <AuthProps, UserState> {
    constructor (props: AuthProps) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    handleSubmit = (e: any) => {
        if (
            this.state.email !== ""  &&
            this.state.password !== ""
        ) {
            e.preventDefault();
            fetch('http://localhost:3000/user/create',{
                method: 'POST',
                body: JSON.stringify({ user: {
                    email: this.state.email,
                    password: this.state.password,
                    isAdmin: "false",
                } }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
        }) 
            .then((res) => res.json()) 
            .then((data) => {
            console.log(data)
            this.props.setToken(data.setToken);
            console.log("User created")
        });
        } else {
            alert("All fields must be completed");
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
                        value={this.state.email}
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
