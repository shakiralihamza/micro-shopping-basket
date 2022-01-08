import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import ProductItem from "./ProductItem";
import {useSelector} from "react-redux";
import {ProductItemType} from '../react-app-env'
import {RootState} from "../app/store";
const Products = () => {
    const products = useSelector((state:RootState) => state.products);
    return (
        <>
            <Paper elevation={0} sx={{height: '500px', padding: '30px', borderRadius: '10px'}}>
                <Grid container spacing={3} sx={{height: '100%'}}>
                    <Grid item xs={12}>
                        <Typography
                            component={'span'}
                            variant={'h6'}
                            sx={{
                                textTransform: 'uppercase'
                            }}
                        >
                            Products
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} sx={{overflow: 'auto', height: '400px'}}>
                            {
                                products.map((product: ProductItemType) => (
                                    <Grid item xs={3} key={product.title}>
                                        <ProductItem
                                            isFavourite={product.isFavourite}
                                            isAdded={product.isAdded}
                                            price={product.price}
                                            title={product.title}
                                            imageUrl={product.imageUrl}
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default Products;
