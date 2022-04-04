import { ADD_CART,REMOVE_CART } from "../constants/ActionTypes";



  export const orderReducer = (state = {products:[],total:0}, { type, payload }) => {

    
    
    switch (type) {
      case ADD_CART:
        let exists = state.products.find((item) => item.id === payload.id)
        let price = 0        
        let product = {}
        let subTotal = state.total
        if(!exists) {
          price =  Number(payload.price)*Number(payload.quantity)
          product = {id:payload.id,title:payload.title,quantity:payload.quantity,price:price,ingrendients:payload.ingrendients}
          subTotal +=price
          state.products.push(product)
        }else{
          product = exists
          product.quantity += payload.quantity
          price = Number(payload.price)*Number(payload.quantity)
          product.price += price
          subTotal +=price
        }

        return{...state,products:[...state.products],total:subTotal}
         
         
         
        
      case REMOVE_CART:
        let clone = state.products;
        let productToDelete = state.products.find((item) => item.id === payload)
             
        let tempTotal = state.total-productToDelete.price           

        clone.splice(clone.indexOf(productToDelete),1);
        return {...state,products:clone,total:tempTotal};

    
      default:
        return state;
    }
  };
