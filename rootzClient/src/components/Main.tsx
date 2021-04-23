import React, { Component }from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './Nav';
import Product from './Product';
import Cart from './Cart';

 function Main () {
    return (
        <>
            <Router>
                <h1>Main</h1>
                <Nav />
                <Switch>
                    <Route exact path="product" component={ Product } />
                    <Route exact path="cart" component={ Cart } />
                </Switch>
            </Router>
        </>
    )
}

export default Main;