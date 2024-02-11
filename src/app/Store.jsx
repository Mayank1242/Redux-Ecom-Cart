import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartReducer,{ cartSlice } from "../features/cart/AddToCart";

export const Store=configureStore({
reducer:{
    allCart:cartReducer,
},
})