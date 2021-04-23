import React, {Component} from 'react';
import { Login } from "./Login";
import { Register } from "./Register";

class Auth extends Component {

    constructor (props) {
        super (props);
        this.state = {
            isLoginOpen: true,
            isRegistrationOpen: false
        };
    }

    render () {
        return (
            <div className="box-container">
                {this.state.isLoginOpen && <LoginBox/>}
                {this.state.isRegisterOpen && <RegisterBox/>}
            </div>
        );
    }

export default Auth;