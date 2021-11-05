import { ADD_CART,REMOVE_CART } from "../constants/ActionTypes";

export const addCart = (data) =>{
    return{
        type:ADD_CART,
        payload:data
    };

}

export const deleteCart = (id) =>{
    return{
        type:REMOVE_CART,
        payload:id
    }
}