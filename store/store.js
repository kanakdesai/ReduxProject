import { configureStore } from "@reduxjs/toolkit";
import { nameSlice } from "./slice/UserSlice";


const store = configureStore({
    reducer:{
        name:  nameSlice.reducer
    }
})

export default store;