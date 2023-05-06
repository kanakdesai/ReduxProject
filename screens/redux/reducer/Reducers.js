import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

export const Reducers = (state =[], action)=>{
    switch(action.type){
        case ADD_TO_CART:
            
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            const delArr = state.filter((item)=>{
                
                return item !== action.payload.id;
            })
            
            return delArr;
        default:
            return state
    }

}