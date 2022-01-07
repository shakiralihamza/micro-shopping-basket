import React from 'react';
import {Button, Grid, Paper, Typography} from "@mui/material";
import BasketItem from "./BasketItem";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Basket = () => (
    <>
        <Paper elevation={0} sx={{padding: '30px', borderRadius: '10px'}}>
            <Grid container>
                <Grid item xs={12}>
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
                        (4 items)
                    </Typography>
                </Grid>
                <Grid item sx={{margin: '10px 0'}}>
                    <Grid container direction={"column"} spacing={5}>
                        {
                            [1, 2, 3, 4].map(() => (
                                <Grid item>
                                    <BasketItem/>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item xs>
                    <Grid container justifyContent={"space-between"} alignItems={'center'}>
                        <Grid item>
                            <Typography
                                component={'span'} fontWeight={'bold'}
                                sx={{position: 'relative', top: '-13px', right: 5, fontSize: 13}}>
                                $
                            </Typography>
                            <Typography component={'span'} variant={'h4'} fontWeight={'bold'}>
                                2345
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

export default Basket;
