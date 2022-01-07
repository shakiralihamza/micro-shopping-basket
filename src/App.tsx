import {Container, Grid} from '@mui/material';
import React from 'react';
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
    return (
        <Container maxWidth={"lg"}>
            <Grid container justifyContent={'space-between'} spacing={2}>
                <Grid item xs={12} mt={4}>
                    <Header/>
                </Grid>
                <Grid item xs={4}>
                    <Basket/>
                </Grid>
                <Grid item xs>
                    <ProductList/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
