import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slice/RootSlice";

export const store = configureStore({
    reducer,
    devTools : true
})