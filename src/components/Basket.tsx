import React from 'react';
import {Box, Button, Grid, Paper, Theme, Typography, useMediaQuery, useTheme} from "@mui/material";
import BasketItem from "./BasketItem";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {ProductItemType} from "../react-app-env";
import {useAppSelector} from "../app/hooks";

const Basket = () => {
    const products = useAppSelector((state) => state.products);
    const addedProducts = products.filter((product: ProductItemType) => product.isAdded);
    const pricesOfAddedProducts = addedProducts.map((product: ProductItemType) => {
        // if quantity of an item is greater than 1, we multiply the price, obviously.
        if (product.quantity > 1) {
            return product.price * product.quantity
        } else {
            return product.price
        }
    });
    const totalAmount = pricesOfAddedProducts.reduce((a, b) => a + b, 0).toFixed(2);
    const theme: Theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Paper elevation={0} sx={{
                padding: '30px',
                borderRadius: '10px',
                minHeight: '500px',
                ...(isSmallerThanMD && {height: '98vh'})
            }}>
                <Grid container justifyContent={'space-between'} alignItems={'stretch'} direction={"column"}
                      sx={{height: '100%'}}>
                    <Grid item xs={1}>
                        <Typography
                            component={'span'}
                            variant={'h6'}
                            color={'primary.main'}
                            sx={{
                                textTransform: 'uppercase'
                            }}
                        >
                            Basket
                        </Typography>
                        &nbsp;
                        <Typography
                            component={'span'}
                            variant={'body1'}
                            color={'primary.main'}
                            sx={{
                                fontSize: '17px'
                            }}
                        >
                            {
                                addedProducts.length > 0
                                    ?
                                    addedProducts.length === 1
                                        ?
                                        `(1 item)`
                                        :
                                        `(${addedProducts.length} items)`
                                    : '(0 item)'
                            }
                        </Typography>
                    </Grid>
                    <Grid item xs={9} sx={{margin: '10px 0'}}>
                        <Box
                            sx={{
                                height: '330px',
                                ...(isSmallerThanMD && {height: '65vh'}),
                                overflow: 'auto',
                                overflowX: 'hidden'
                            }}
                        >
                            <Grid container direction={"column"} spacing={2}>
                                {
                                    addedProducts.map((product: ProductItemType) => (
                                        <Grid item xs={12} key={product.id}>
                                            <BasketItem
                                                id={product.id}
                                                quantity={product.quantity}
                                                title={product.title}
                                                imageUrl={product.imageUrl}
                                                price={product.price}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid container direction={'row'} justifyContent={"space-between"} alignItems={'center'}>
                            <Grid item>
                                <Typography
                                    component={'span'} fontWeight={'bold'}
                                    sx={{position: 'relative', top: '-5px', right: 2, fontSize: 11}}>
                                    $
                                </Typography>
                                <Typography component={'span'} variant={'h6'} fontWeight={'bold'}>
                                    {totalAmount}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{
                                        borderRadius: '20px',
                                        padding: '8px 15px',
                                        textTransform: 'none',
                                        color: 'rgb(229,241,248)'
                                    }}
                                    startIcon={<ShoppingCartCheckoutIcon/>}
                                    variant={'contained'}
                                    color={'primary'}
                                    size={'small'}
                                >
                                    Check Out
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default Basket;
