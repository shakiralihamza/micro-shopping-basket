import React, {FC} from 'react';
import {Box, Grid, Paper, Stack, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";
import {useAppDispatch} from "../app/hooks";
import {decreaseQuantity, increaseQuantity, removeFromBasket} from "../app/productsSlice";

type QuantityButtonProps = {
    icon: JSX.Element
    action: 'increase' | 'decrease'
    quantity: number
    id: number
}
type BasketItemProps = {
    id: number
    imageUrl: string
    title: string
    quantity: number
    price: number
}
const QuantityButton: FC<QuantityButtonProps> = ({icon, action, quantity, id}) => {
    const dispatch = useAppDispatch();
    const handleQuantityClick = () => {
        if (action === 'increase') {
            dispatch(increaseQuantity({id, quantity}))
        } else if (action === "decrease") {
            if (quantity) {
                if (quantity > 1) {
                    dispatch(decreaseQuantity({id, quantity}))
                }
            }
        }
    }
    return (
        <Paper
            onClick={handleQuantityClick}
            sx={{
                borderRadius: '50%',
                border: '1px solid',
                borderColor: 'grey.200',
                '&: hover': {cursor: 'pointer'}
            }}
            elevation={0}
        >
            <IconButton disableRipple color={"primary"}
                        aria-label="add to favorites"
                        size={'small'}
            >
                {icon}
            </IconButton>
        </Paper>
    );
}

const BasketItem: FC<BasketItemProps> = ({id, imageUrl, price, quantity, title}) => {
    const dispatch = useAppDispatch();
    return (
        <Grid container alignItems={'center'} justifyContent={"space-between"}
              sx={{borderBottom: '1px solid', borderColor: 'grey.400', borderRadius: '10px', paddingBottom: '5px'}}>
            <Grid item xs={2}>
                <img alt={"_image"} width={'100%'} src={imageUrl}/>
            </Grid>
            <Grid item xs={6}>
                <Typography variant={'body2'} sx={{fontSize: 12}} fontWeight={'bold'}>{title}</Typography>
                <Typography color={'primary'} fontWeight={'bold'} component={'span'}>${price}</Typography>
            </Grid>
            <Grid item xs={1}>
                <Stack direction={"column"} justifyContent={"center"} alignItems={'center'} spacing={0}>
                    <QuantityButton
                        icon={<RemoveIcon sx={{fontSize: 15}}/>}
                        action={'decrease'}
                        id={id}
                        quantity={quantity}
                    />
                    <Typography variant={'body2'}>{quantity}</Typography>
                    <QuantityButton
                        icon={<AddIcon sx={{fontSize: 15}}/>}
                        action={'increase'}
                        id={id}
                        quantity={quantity}
                    />
                </Stack>
            </Grid>
            <Grid item xs={1} sx={{marginTop: '7px'}}>
                <Box component={'span'} onClick={() => dispatch(removeFromBasket({id}))}>
                    <Typography
                        color={'grey.400'}
                        component={'span'}
                        sx={{marginLeft: '4px', '&: hover': {cursor: 'pointer'}}}
                    >
                        <CloseIcon sx={{fontSize: 17}}/>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default BasketItem;
