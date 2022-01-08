import {createSlice} from "@reduxjs/toolkit";
import {ProductItemType} from "../react-app-env";

const initialState: ProductItemType[] =[
    {
        title: 'Product 2',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
    },
    {
        title: 'Product 1',
        price: 56.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
    },
    {
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
    },
    {
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
    },
    {
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: true,
        isFavourite: true,
    },
    {
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: true,
        isFavourite: false,
    },
];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
});

export default productsSlice.reducer;
