import React from 'react';
import {Grid, Paper} from "@mui/material";
import ProductItem from "./ProductItem";


const ProductList = () => (
    <>
        <Grid container>
            <Grid item xs={8}>
                <Paper sx={{padding: '20px'}}>
                    <Grid container spacing={2}>
                        {
                            [1, 2, 3, 4, 5].map(() => (
                                <Grid item xs={'auto'}>
                                    <ProductItem isFavourite={false} isAdded={false}/>

                                </Grid>
                            ))
                        }
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </>
);

export default ProductList;
