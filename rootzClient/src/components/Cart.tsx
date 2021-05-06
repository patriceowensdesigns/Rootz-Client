import React, { Component } from 'react';

type AuthProps = {
    actualToken: string;
}

type CartState ={
    cartEntry: [],
}
    
export default class Cart extends Component <AuthProps, CartState>{
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            cartEntry: [],
        }
    }

        fetchCart = () => {
                fetch('http://localhost:3000/cart/mine', {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': this.props.actualToken,
                    }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ cartEntry: data.cartEntry });
            })
            .catch((err) => console.log(err));
        }
        componentDidMount() {
            this.fetchCart()
            console.log("Component *DID* mount")
        }

        render(){
            return(
                <div>
                    <h1>CART</h1>
                </div>
            );
        }
    }