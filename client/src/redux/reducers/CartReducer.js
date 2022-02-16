import { ADD_CART,REMOVE_CART } from "../constants/ActionTypes";

const initialState = {
    products: []
  };

  export const productReducer = (state =initialState, { type, payload }) => {
    switch (type) {
      case ADD_CART:

        return {...state,products:[...state.products,payload] }; 
        
      case REMOVE_CART:
            let clone = state.products;
            clone.splice(payload,1);
            return clone;

        //return{...state,products:state.products.filter((item,id)=> id !== payload)} ; 
      default:
        return state;
    }
  };
