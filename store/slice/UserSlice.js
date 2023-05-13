import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name : 'user',
    initialState: {
        name: "",
        
    },
    reducers:{
        addName(state, action){
            // state.push(action.payload)
            state.name =  action.payload
        },
        
    }
})

const ageSlice = createSlice({
    name: 'age',
    initialState:{
        age: '',
    },
    reducers:{
        addAge(state, action){
            state.age = action.payload
        }
    }
})

export {nameSlice};
export{ageSlice};

export const {addName } = nameSlice.actions
export const {addAge} =  ageSlice.actions