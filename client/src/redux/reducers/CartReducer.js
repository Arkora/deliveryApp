import { ADD_CART,REMOVE_CART } from "../constants/ActionTypes";

const initialState = {
    products: [],
    total: 0,
    
    
  };

  export const orderReducer = (state =initialState, { type, payload }) => {
    switch (type) {
      case ADD_CART:
        

        return {...state,products:[...state.products,payload]}; 
         
        
      case REMOVE_CART:
            let clone = state.products;
            clone.splice(payload,1);
            return {products:clone};

    
      default:
        return state;
    }
  };
