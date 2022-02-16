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
            return clone;
            
            //return state.ingrendients.slice(0,payload).concat(state.ingrendients.slice(payload+1))
        
                                    
                //return { ingrendients:[...state.ingrendients.filter(ingrendient => ingrendient !== payload)]}
            
        default:
            return state;

    }
}