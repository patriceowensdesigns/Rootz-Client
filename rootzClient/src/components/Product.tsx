import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

type AuthProps = {
    actualToken: string;
}

type ProductState ={
    productEntry: [],
}

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },
});

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
                    <Container>
                        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
                            Products
                        </Typography>
                        {/* <Grid container spacing={3}>
                            {this.state.productEntry.map((product) => (
                                <Grid item xs={12} sm={4} key={product.id}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                        className={classes.media}
                                        image={product.image}
                                        />
                                        <CardContent>
                                        <Typography color="primary" variant="h5">
                                            {product.productName}
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle2">
                                            {product.retailPrice}
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                            </Grid> */}
                    </Container>
                </div>
            );
        }
    }



