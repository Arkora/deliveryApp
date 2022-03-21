import { ADD_INGRENDIENT,REMOVE_INGRENDIENT,RESET_INGRENDIENTS } from "../constants/ActionTypes";

export const addIngrendient = (data) =>{
    return{
        type:ADD_INGRENDIENT,
        payload:data
    };
}

export const removeIngrendient = (id) =>{
    return{
        type:REMOVE_INGRENDIENT,
        payload:id
    };
}

export const resetIngrendients = () =>{
    return{
        type:RESET_INGRENDIENTS
    }
}