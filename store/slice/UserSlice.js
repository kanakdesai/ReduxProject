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

const citySlice= createSlice({
    name: 'city',
    initialState:{
        city: ''
    },
    reducers:{
        addCity(state, action){
            state.city = action.payload
        }
    }
})

export {nameSlice};
export{ageSlice};
export{citySlice}

export const {addName } = nameSlice.actions
export const {addAge} =  ageSlice.actions
export const {addCity} = citySlice.actions