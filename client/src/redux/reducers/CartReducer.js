import { ADD_CART,REMOVE_CART,DELETE_INGRENDIENT,UPDATE_QUANTITY,DELETE_CART } from "../constants/ActionTypes";



  export const orderReducer = (state = {products:[],total:0}, { type, payload }) => {

    
    
    switch (type) {
      case ADD_CART:
        let exists = state.products.find((item) => item.id === payload.id)               
        var product = {}
        var addTotal = 0
        var subTotal = 0
        var newQuantity
        if(!exists && payload.quantity === 0) {          
          subTotal =  Number(payload.price)*1
          product = {id:payload.id,title:payload.title,quantity:1,price:Number(payload.price),subTotal:subTotal,ingrendients:payload.ingrendients}
          state.products.push(product)
        }else if(!exists) {          
          subTotal =  Number(payload.price)*Number(payload.quantity)
          product = {id:payload.id,title:payload.title,quantity:payload.quantity,price:Number(payload.price),subTotal:subTotal,ingrendients:payload.ingrendients}
          state.products.push(product)
        }else if(exists && payload.quantity === 0){
          product = exists          
          newQuantity = Number(product.quantity) + 1
          product.quantity = String(newQuantity)
          product.subTotal += Number(payload.price)
        }else{
          product = exists          
          newQuantity = Number(product.quantity) + Number(payload.quantity)
          product.quantity = String(newQuantity)
          subTotal = Number(payload.price)*newQuantity
          product.subTotal += subTotal
        }    
        state.products.forEach(element => {
          addTotal += element.subTotal
        });    
        return{...state,products:[...state.products],total:addTotal}
        
      case REMOVE_CART:
         let clone = state.products;
        product = state.products.find((item) => item.id === payload)       
        addTotal = state.total - product.subTotal
        clone.splice(clone.indexOf(product),1)       
        return{...state,products:clone,total:addTotal}

      case DELETE_INGRENDIENT:               
         product = state.products.find((item) => item.id === payload.id)
        let ingrendients = product.ingrendients.filter((item) => item !== payload.item)
        product.ingrendients =ingrendients
        return{...state,products:[...state.products]}

      case UPDATE_QUANTITY:
        product = state.products.find((item) => item.id === payload.id)
         newQuantity = payload.quantity
         subTotal = product.price * newQuantity 
         addTotal = ((newQuantity-product.quantity)*product.price)+state.total      
        product.quantity = newQuantity
        product.subTotal = subTotal        
        return{...state,products:[...state.products],total:addTotal}
      case DELETE_CART:
        return{...state,products:[],total:0}
      default:
        return state;
    }
  };
