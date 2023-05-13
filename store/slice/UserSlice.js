import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name : 'user',
    initialState:'',
    reducers:{
        addName(state, action){}
    }
})

export {nameSlice};