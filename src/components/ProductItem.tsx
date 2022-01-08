import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Box} from "@mui/material";
import {FC} from "react";
import DoneIcon from '@mui/icons-material/Done';

type ProductItemProps = {
    isFavourite: boolean
    isAdded: boolean
}
const ProductItem: FC<ProductItemProps> = ({isFavourite, isAdded}) => (
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
                    size={"small"}
                    sx={{
                        backgroundColor: isFavourite ? '#f55058' : null,
                        '&: hover': {backgroundColor: isFavourite ? '#f55058' : null},
                        margin: '10px 20px 0 0',
                        color: isFavourite ? 'white' : 'grey.400'
                    }}
                >
                    <FavoriteIcon sx={{fontSize:13}}/>
                </IconButton>
            }
        />
        <CardMedia
            component="img"
            height={100}
            image="https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f"
            alt="Image"
        />
        <CardContent sx={{padding: 2}}>
            <Typography variant="body1" sx={{fontWeight: 500, fontSize:15}}>
                This spoon
            </Typography>
        </CardContent>
        <CardActions sx={{overflow: 'hidden', height: '70px', padding: 2}}>
            <Typography mt={2} variant={'h6'} sx={{fontSize:18}} color={'primary'} fontWeight={"bold"}>
                $12.9
            </Typography>

            <Box sx={{
                height: '120px',
                width: '100%',
                backgroundColor: isAdded ? 'rgba(63,81,181)' : 'rgba(63,81,181,0.12)',
                borderRadius: '50%',
                right: -60,
                bottom: -30,
                position: 'relative',
                '&: hover': {
                    cursor: isAdded ? null : 'pointer'
                }
            }}>
                {
                    isAdded ?
                        <IconButton disableRipple color={"primary"}
                                    aria-label="add to favorites"
                                    sx={{
                                        left: 5,
                                        top: 17,
                                        color: 'white',
                                        '&: hover': {
                                            cursor: 'default'
                                        }
                                    }}>
                            <DoneIcon/>
                        </IconButton>
                        :
                        <IconButton disableRipple
                                    aria-label="add to favorites"
                                    sx={{
                                        left: 11,
                                        top: 16,
                                        color: 'primary.main'
                                    }}>
                            <Box sx={{fontWeight: 600, fontSize:20}}>+</Box>
                        </IconButton>
                }
            </Box>

        </CardActions>
    </Card>
);

export default ProductItem;
