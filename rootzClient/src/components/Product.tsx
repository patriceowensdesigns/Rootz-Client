import React, { Component } from 'react';
import { Container } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

type AuthProps = {
    sessionToken: React.Dispatch<React.SetStateAction<string>>
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
            productEntry: [
                // {
                //     scn: "",
                //     productName: "",
                //     image: "",
                //     retailPrice: "",
                //     onHand: "",
                // },
            ],
        }
    }

        fetchProducts = () => {
                fetch('http://localhost:3000/product/', {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/json',
                        Authorization: this.props.sessionToken,
                    }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ productEntry: data.productEntry });
            })
            .catch((err) => console.log(err));
        }
        componentDidMount () {
            this.fetchProducts()
        }

        render(){
            return(
                <div>
                    <Container>
                        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
                            Products
                        </Typography>
                        <Grid container spacing={3}>
                            {this.state.productEntry.map(([]) => (
                                <Grid item xs={12} sm={4} key={Product.id}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                        className={classes.media}
                                        image={Product.image}
                                        />
                                        <CardContent>
                                        <Typography color="primary" variant="h5">
                                            {Product.productName}
                                        </Typography>
                                        <Typography color="textSecondary" variant="subtitle2">
                                            {Product.retailPrice}
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                            </Grid>
                    </Container>
                </div>
            );
        }
    }



