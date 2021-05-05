import React  from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import { Auth } from '../auth/Auth';
import Product from './Product';
import Cart from './Cart';

interface MainProps {
    sessionToken: React.Dispatch<React.SetStateAction<string>>,
    setRole: React.Dispatch<React.SetStateAction<string>>,
    actualToken: string,
}

 function Main (props: MainProps) {

     
    return (
        <>
            <Router>
                <h6>Main</h6>
                <Nav />
                <Auth sessionToken={props.sessionToken} setRole={props.setRole} />
                <Switch>
                    <Route path="/product">
                        <Product actualToken={props.actualToken}/>
                    </Route>
                    <Route exact path="cart" component={ Cart } />
                </Switch>
            </Router>
        </>
    )
}

export default Main;