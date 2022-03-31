import { FETCH_FOODS,DELETE_FOODS } from "../constants/actionTypes"



export const foodsReducer = (state = { products:[] }, {type,payload}) => {
  switch (type) {
    case FETCH_FOODS:      
      return { ...state,products: payload }
    case DELETE_FOODS:
      return {...state,products: payload}  
    default:
      return state
  }
};

