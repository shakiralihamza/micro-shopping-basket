import {createSlice} from "@reduxjs/toolkit";
import {ProductItemType} from "../react-app-env";

const initialState: ProductItemType[] = [
    {
        id: 0,
        title: 'Product 2',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 1,
        title: 'Product 1',
        price: 56.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 2,
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 3,
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 4,
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: true,
        isFavourite: true,
        quantity: 0
    },
    {
        id: 5,
        title: 'Product 3',
        price: 34.8,
        imageUrl: 'https://images.unsplash.com/photo-1597177142843-b7997f5e2d4f',
        isAdded: true,
        isFavourite: false,
        quantity: 0
    },
];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToBasket: (state, action) => (
            state.map((product: ProductItemType) => {
                if (product.id === action.payload.id) {
                    return {...product, isAdded: true, quantity: 1}
                } else {
                    return {...product}
                }
            })
        ),
        removeFromBasket: (state, action) => (
            state.map((product: ProductItemType) => {
                if (product.id === action.payload.id) {
                    return {...product, isAdded: false, quantity: 0}
                } else {
                    return {...product}
                }
            })
        ),
        addToFavourites: (state, action) => (
            state.map((product: ProductItemType) => {
                if (product.id === action.payload.id) {
                    return {...product, isFavourite: true}
                } else {
                    return {...product}
                }
            })
        ),
        removeFromFavourites: (state, action) => (
            state.map((product: ProductItemType) => {
                if (product.id === action.payload.id) {
                    return {...product, isFavourite: false}
                } else {
                    return {...product}
                }
            })
        ),
        increaseQuantity: (state, action) => (
            state.map((product: ProductItemType) => {
                if (product.id === action.payload.id) {
                    return {...product, quantity: action.payload.quantity + 1}
                } else {
                    return {...product}
                }
            })
        ),
        decreaseQuantity: (state, action) => (
            state.map((product: ProductItemType) => {
                if (product.id === action.payload.id) {
                    return {...product, quantity: action.payload.quantity - 1}
                } else {
                    return {...product}
                }
            })
        ),
    }
});

export default productsSlice.reducer;

export const {
    addToBasket,
    removeFromBasket,
    removeFromFavourites,
    addToFavourites,
    increaseQuantity,
    decreaseQuantity
} = productsSlice.actions;
