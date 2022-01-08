import React from 'react';
import {Box, Button, Grid, Paper, Typography} from "@mui/material";
import BasketItem from "./BasketItem";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Basket = () => (
    <>
        <Paper elevation={0} sx={{padding: '30px', borderRadius: '10px', height: '500px'}}>
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
                        (4 items)
                    </Typography>
                </Grid>
                <Grid item xs={9} sx={{margin: '10px 0'}}>
                    <Box sx={{height: '330px', overflow:'auto', overflowX: 'hidden'}}>
                        <Grid container direction={"column"} spacing={2}>
                            {
                                [1,1,1].map(() => (
                                    <Grid item xs={12}>
                                        <BasketItem/>
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
