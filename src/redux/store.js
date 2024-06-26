import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import tokenSlice from "./tokenSlice";

export const store = configureStore({
    reducer: {
        user : usersSlice,
        token : tokenSlice
    }
})