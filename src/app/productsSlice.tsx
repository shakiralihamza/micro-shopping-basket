import {createSlice} from "@reduxjs/toolkit";
import {ProductItemType} from "../react-app-env";

const initialState: ProductItemType[] = [
    {
        id: 0,
        title: 'Origami 🤨',
        price: 0.2,
        imageUrl: 'https://images.unsplash.com/photo-1618887799317-a6b947a1f6aa',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 1,
        title: 'Colorful Spoons 3pc + 3pc tea',
        price: 56.8,
        imageUrl: 'https://images.unsplash.com/photo-1591872203534-278fc084969e',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 2,
        title: 'Wooden Spoon',
        price: 5,
        imageUrl: 'https://images.unsplash.com/photo-1579892876770-461a88bd87df',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 3,
        title: 'Tanga Wheels 2x',
        price: 496.25,
        imageUrl: 'https://images.unsplash.com/photo-1548741465-8b453e363e48',
        isAdded: false,
        isFavourite: false,
        quantity: 0
    },
    {
        id: 4,
        title: 'Paint Brush 6pc',
        price: 24.2,
        imageUrl: 'https://images.unsplash.com/photo-1598860024867-a1cb3a858427',
        isAdded: false,
        isFavourite: true,
        quantity: 0
    },
    {
        id: 5,
        title: 'Wireless Headphones',
        price: 340,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        isAdded: false,
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

// export default productsSlice.reducer;

export const {
    addToBasket,
    removeFromBasket,
    removeFromFavourites,
    addToFavourites,
    increaseQuantity,
    decreaseQuantity
} = productsSlice.actions;
