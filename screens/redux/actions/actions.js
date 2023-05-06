import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

export const addItemToCart = (data) =>({
    type : ADD_TO_CART,
    payload : data
})

export const removeFromCart = (item) => ({
    
    type: REMOVE_FROM_CART,
    payload: item
})