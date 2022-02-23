import { ADD_INGRENDIENT,REMOVE_INGRENDIENT } from "../constants/ActionTypes";

const initialState = {
      
    ingrendients: []
    
    }


export const ingrendientsReducer = (state = initialState,{type,payload}) =>{
    switch (type) {

        case ADD_INGRENDIENT:
            return{...state,ingrendients:[...state.ingrendients,payload]};
        case REMOVE_INGRENDIENT:
            let clone = state.ingrendients;
            clone.splice(payload,1);
            return {ingrendients:clone};
            
            
            
        default:
            return state;

    }
}