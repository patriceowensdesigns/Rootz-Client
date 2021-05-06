import React, { Component } from 'react';

type AuthProps = {
    actualToken: string;
}

type ProductState ={
    productEntry: [],
}
    
export default class Product extends Component <AuthProps, ProductState>{
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            productEntry: [],
        }
    }

        fetchProducts = () => {
                fetch('http://localhost:3000/product/', {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        'Authorization': this.props.actualToken,
                    }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ productEntry: data.productEntry });
            })
            .catch((err) => console.log(err));
        }
        componentDidMount() {
            this.fetchProducts()
            console.log("Component *DID* mount")
        }

        render(){
            return(
                <div>
                    <h1>PRODUCT</h1>
                </div>
            );
        }
    }