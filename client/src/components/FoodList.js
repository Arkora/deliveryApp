import styled from "styled-components";
import React from "react";
import FoodItem from "./FoodItem";
//import { data } from "../Data";

export const Foods = styled.div`
    width: 99%;
    margin: auto;
    overflow: auto;
    overflow-y: scroll;
    
`


export const FoodList = ({foods}) => {
    return(
    <Foods>
        {foods.map(food =>{
            return <FoodItem id = {food.id} title = {food.title} img = {food.img} ingrendients ={food.ingrendients} />
        })}

        
    </Foods>
    );
};

export default FoodList;