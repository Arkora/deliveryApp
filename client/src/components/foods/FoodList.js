import styled from "styled-components";
import React from "react";
import FoodItem from "./FoodItem";


export const Foods = styled.div`
    width: 99%;
    margin: auto;    
    
    
`


export const FoodList = ({foods}) => {
    return(
    
    <Foods>
        {foods.map(food =>{
            return <FoodItem id = {food._id} title = {food.title} img = {food.img} ingrendients = {food.ingrendients} price = {food.price}/>
        })}

        
    </Foods>
      
    );
};

export default FoodList;