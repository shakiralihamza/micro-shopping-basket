import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Box, Grid} from "@mui/material";
import {FC} from "react";
import DoneIcon from '@mui/icons-material/Done';
import {ProductItemType} from "../react-app-env";
import {addToBasket, addToFavourites, removeFromFavourites} from "../app/productsSlice";
import {useAppDispatch} from "../app/hooks";

const ProductItem: FC<ProductItemType> = ({id, isFavourite, isAdded, price, imageUrl, title}) => {
    const dispatch = useAppDispatch();

    const handleFavouriteClick = () => {
        if (isFavourite) {
            dispatch(removeFromFavourites({id}))
        } else {
            dispatch(addToFavourites({id}))
        }
    }

    const handleAddClick = () => {
        if (!isAdded) {
            dispatch(addToBasket({id}))
        }
    }
    return (
        <Card elevation={isAdded ? 1 : 0} sx={{
            width: 170,
            borderRadius: '10px',
            border: '1.5px solid',
            borderColor: isAdded ? 'primary.main' : '#e7e7e7'
        }}>
            <CardHeader
                sx={{padding: 0}}
                action={
                    <IconButton
                        disableRipple
                        onClick={handleFavouriteClick}
                        size={"small"}
                        sx={{
                            backgroundColor: isFavourite ? '#f55058' : null,
                            '&: hover': {backgroundColor: isFavourite ? '#f55058' : null},
                            margin: '10px 20px 0 0',
                            color: isFavourite ? 'white' : 'grey.400'
                        }}
                    >
                        <FavoriteIcon sx={{fontSize: 13}}/>
                    </IconButton>
                }
            />
            <CardMedia
                component="img"
                height={100}
                image={imageUrl}
                alt={title}
            />
            <CardContent sx={{padding: 2}}>
                <Typography variant="body1" sx={{fontWeight: 500, fontSize: 15}}>
                    {title}
                </Typography>
            </CardContent>
            <Grid container sx={{height: '60px', paddingLeft: '15px'}}>
                <Grid item xs={7}>
                    <Typography
                        mt={2}
                        variant={'h6'}
                        sx={{fontSize: 18}}
                        color={'primary'}
                        fontWeight={"bold"}
                    >
                        ${price}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        onClick={handleAddClick}
                        sx={{
                            height: '150px',
                            width: '150px',
                            backgroundColor: isAdded ? 'rgba(63,81,181)' : 'rgba(63,81,181,0.12)',
                            borderRadius: '50%',
                            top: -10,
                            left: -5,
                            position: 'relative',
                            '&: hover': {
                                cursor: isAdded ? null : 'pointer'
                            }
                        }}
                    >
                        {
                            isAdded ?
                                <IconButton disableRipple color={"primary"}
                                            sx={{
                                                left: 22,
                                                top: 19,
                                                color: 'white',
                                                '&: hover': {
                                                    cursor: 'default'
                                                }
                                            }}>
                                    <DoneIcon/>
                                </IconButton>
                                :
                                <IconButton disableRipple
                                            sx={{
                                                left: 25,
                                                top: 19,
                                                color: 'primary.main'
                                            }}>
                                    <Box sx={{fontWeight: 600, fontSize: 20}}>+</Box>
                                </IconButton>
                        }
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

export default ProductItem;
