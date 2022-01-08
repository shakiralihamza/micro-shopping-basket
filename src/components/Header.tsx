import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Grid, Paper, Stack} from "@mui/material";

const Header = () => {
    return (
        <>
            <Paper elevation={0} sx={{borderRadius: '10px', padding: '15px 20px'}}>
                <Grid container justifyContent={"space-between"} alignItems={'center'} sx={{height: '100%'}}>
                    <Grid item>
                        <Typography variant="h5" fontWeight={'bold'} color={'primary'}>
                            Shopping Basket
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction={'row'} spacing={3}>
                            <Badge badgeContent={4} color="primary">
                                <IconButton size="small" sx={{
                                    backgroundColor: 'grey.100',
                                    borderRadius: '8px',
                                    '&: hover': {
                                        backgroundColor: 'grey.100'
                                    }
                                }}>
                                    <ShoppingCartOutlinedIcon color={'primary'}/>
                                </IconButton>
                            </Badge>
                            <Badge badgeContent={17} color="primary">
                                <IconButton size="small" sx={{
                                    backgroundColor: 'grey.100',
                                    borderRadius: '8px',
                                    '&: hover': {
                                        backgroundColor: 'grey.100'
                                    }
                                }}>
                                    <FavoriteBorderOutlinedIcon color={"primary"}/>
                                </IconButton>
                            </Badge>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
};

export default Header;
