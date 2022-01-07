import React, {FC} from 'react';
import {Grid, Paper, Stack, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import IconButton from "@mui/material/IconButton";

type QuantityButtonProps = {
    icon: JSX.Element
}
const QuantityButton: FC<QuantityButtonProps> = ({icon}) => {
    return (
        <Paper sx={{
            borderRadius: '50%',
            border: '1px solid',
            borderColor: 'grey.200',
            '&: hover': {
                cursor: 'pointer'
            }
        }} elevation={0}>
            <IconButton disableRipple color={"primary"}
                        aria-label="add to favorites"
                        size={'small'}
            >
                {icon}
            </IconButton>
        </Paper>
    );
}

const BasketItem = () => (
    <Grid container alignItems={'center'} spacing={2}>
        <Grid item xs={4}>
            <img alt={"_image"} width={'100%'} src={'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f'}/>
        </Grid>
        <Grid item xs={6}>
            <Typography variant={'body2'} fontWeight={'bold'}>Theerg spooen</Typography>
            <Typography color={'primary'} fontWeight={'bold'} component={'span'}>$15.77</Typography>
        </Grid>
        <Grid item xs={1}>
            <Stack direction={"column"} justifyContent={"center"} alignItems={'center'} spacing={1}>
                <QuantityButton icon={<RemoveIcon sx={{fontSize: 15}}/>}/>
                <Typography variant={'body2'} sx={{}}>1</Typography>
                <QuantityButton icon={<AddIcon sx={{fontSize: 15}}/>}/>
            </Stack>
        </Grid>
        <Grid item xs={1} sx={{marginTop: '7px'}}>
            <Typography
                color={'grey.400'}
                component={'span'}
                sx={{marginLeft: '4px', '&: hover': {cursor: 'pointer'}}}
            >
                <CloseIcon sx={{fontSize: 17}}/>
            </Typography>
        </Grid>
    </Grid>
);

export default BasketItem;
