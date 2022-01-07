import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import ProductItem from "./ProductItem";

const ProductList = () => (
    <>
        <Paper elevation={0} sx={{padding: '30px', borderRadius: '10px'}}>
            <Grid container spacing={2}>
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
                {
                    [1, 2, 3, 4, 5].map(() => (
                        <Grid item xs={'auto'}>
                            <ProductItem isFavourite={false} isAdded={false}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Paper>
    </>
);

export default ProductList;
