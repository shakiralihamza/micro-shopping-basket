import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";
import ProductItem from "./ProductItem";

const Products = () => (
    <>
        <Paper elevation={0} sx={{height: '500px', padding: '30px', borderRadius: '10px'}}>
            <Grid container spacing={3} sx={{height:'100%'}}>
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
                    <Grid container spacing={2} sx={{overflow:'auto', height:'400px'}}>
                        {
                            [1, 2, 3,4,4,5,5,5,6,4].map((value) => (
                                <Grid item xs={3}>
                                    <ProductItem isFavourite={value%2!==0} isAdded={value%2===0}/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    </>
);

export default Products;
