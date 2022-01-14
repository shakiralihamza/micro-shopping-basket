import React from 'react';
import {Grid, Paper, Theme, Typography, useMediaQuery, useTheme} from "@mui/material";
import ProductItem from "./ProductItem";
import {ProductItemType} from '../react-app-env'
import {useAppSelector} from "../app/hooks";

const Products = () => {
    const products = useAppSelector((state) => state.products);
    const theme: Theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            {/*<Paper elevation={0} sx={{height: '500px', padding: '30px', borderRadius: '10px'}}>*/}
            <Paper elevation={0}
                   sx={{
                       minHeight: '500px',
                       // ...(isSmallerThanMD && {height: ''}),
                       padding: '30px',
                       borderRadius: '10px',
                       ...(isSmallerThanMD && {marginBottom: '30px'}),
                   }}
            >
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
                        <Grid container spacing={2}
                              sx={{
                                  overflow: 'auto',
                                  height: '400px',
                                  ...(isSmallerThanMD && {height: 'auto'})
                              }}
                              justifyContent={{xs:'space-around', md: 'flex-start'}}
                        >
                            {
                                products.map((product: ProductItemType) => (
                                    <Grid item xs={'auto'} md={4} lg={3} key={product.id}>
                                        <ProductItem
                                            id={product.id}
                                            isFavourite={product.isFavourite}
                                            isAdded={product.isAdded}
                                            price={product.price}
                                            title={product.title}
                                            imageUrl={product.imageUrl}
                                            quantity={product.quantity}
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
