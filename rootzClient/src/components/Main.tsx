import React  from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import { Auth } from '../auth/Auth';
import Product from './Product';
import Cart from './Cart';

interface MainProps {
    setToken: React.Dispatch<React.SetStateAction<string>>
    setRole: React.Dispatch<React.SetStateAction<string>>
}

 function Main (props: MainProps) {
    return (
        <>
            <Router>
                <h1>Main</h1>
                <Nav />
                <Auth setToken={props.setToken} setRole={props.setRole} />
                <Switch>
                    <Route exact path="product" component={ Product } />
                    <Route exact path="cart" component={ Cart } />
                </Switch>
            </Router>
        </>
    )
}

export default Main;