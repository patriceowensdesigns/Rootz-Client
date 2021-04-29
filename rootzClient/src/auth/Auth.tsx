import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import { Login } from './Login';
import { Register } from './Register';

type AuthProps = {
    setToken: React.Dispatch<React.SetStateAction<string>>
    setRole: React.Dispatch<React.SetStateAction<string>>
};

type UserState = {
    showLogin: boolean;
};

export class Auth extends Component <AuthProps, UserState> {
    constructor(props: AuthProps){
        super(props);
        this.state = {
            showLogin: false, 
        };
    }

    loginToggle = (e: any) => {
        e.preventDefault();
        if (this.state.showLogin === false) {
            return this.setState({
                showLogin: true,
            });
        }
        if (this.state.showLogin === true) {
            return this.setState({
                showLogin: false,
            });
        }
    };

    render () {
    return(
        <div className="Auth">
            <div id = "loginRegister">
                {this.state.showLogin ? (
                    <div>
                        <Register
                            setToken={this.props.setToken}
                            setRole={this.props.setRole} 
                            />
                    </div>
                ) : (
                    <div>
                        <Login
                            setToken={this.props.setToken}
                            setRole={this.props.setRole} 
                            />
                    </div>
                )}
                <br />
                <Button
                    variant="contained"
                    onClick={(e) => {
                      this.loginToggle(e);
                    }}
                  >
                    {this.state.showLogin ? "Login Here" : "Register Here"}
                  </Button>
            </div>
        </div>
    );  
}   
}
