import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./slice/UserSlice";
import { ageSlice } from "./slice/UserSlice";
import { citySlice } from "./slice/UserSlice";

const store = configureStore({
    reducer:{
        name:  nameSlice.reducer,
        age: ageSlice.reducer,
        city: citySlice.reducer
    }
})

export default store; 