import React, { useState } from 'react';
import Basket from "./components/Basket";
import Products from "./components/Products";
import Header from "./components/Header";
import {Box, Container, Drawer, Grid, Theme, useMediaQuery, useTheme} from '@mui/material';

function App() {
    const theme: Theme = useTheme();
    const isSmallerThanMD = useMediaQuery(theme.breakpoints.down('md'));
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };
    const handleMenuClose = () => {
        setMenuOpen(false);
    };
    return (
        <Container maxWidth={"lg"}>
            <Grid container justifyContent={'space-between'} spacing={2}>
                <Grid item xs={12} mt={2}>
                    <Header openBasket={handleMenuOpen}/>
                </Grid>
                {
                    isSmallerThanMD ?
                        (<Drawer
                            anchor={"left"}
                            open={menuOpen}
                            onClose={handleMenuClose}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            <Box sx={{padding: '10px 10px 0', width: '310px', height: '100vh'}}>
                                <Basket/>
                            </Box>
                        </Drawer>)
                        :
                        (
                            <Grid item sx={{width: '310px'}}>
                                <Basket/>
                            </Grid>)
                }
                <Grid item xs>
                    <Products/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
