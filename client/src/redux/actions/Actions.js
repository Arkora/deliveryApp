import { ADD_CART,REMOVE_CART,DELETE_INGRENDIENT, UPDATE_QUANTITY,DELETE_CART } from "../constants/ActionTypes";

export const addCart = (data) =>{
    return{type:ADD_CART,payload:data};
}

export const deleteItem = (id) =>{
    return{type:REMOVE_CART,payload:id}
}

export const deleteIngrendient = (data) =>{
    return{type:DELETE_INGRENDIENT,payload:data}
}

export const updateQuantity = (data) =>{
    return{type:UPDATE_QUANTITY,payload:data}
}

export const deleteCart = () =>{
    return{type:DELETE_CART}
}
