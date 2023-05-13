import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./slice/UserSlice";
import { ageSlice } from "./slice/UserSlice";

const store = configureStore({
    reducer:{
        name:  nameSlice.reducer,
        age: ageSlice.reducer
    }
})

export default store;