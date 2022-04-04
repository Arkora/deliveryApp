import React from "react";
import {CategoriesContainer,CoffeSvg,SteakSvg,Circle,PizzaSvg,SoupSvg,CakeSvg} from "./styles"






const Categories = ({setCategory}) =>{
    
    
    
    return(
        <CategoriesContainer>
            <Circle onClick={(e) =>setCategory("meat")} > <SteakSvg /> </Circle>
            <Circle onClick={(e) =>setCategory("pizza")}> <PizzaSvg />  </Circle>
            <Circle onClick={(e) =>setCategory("soup")}> <SoupSvg />  </Circle>
            <Circle onClick={(e) =>setCategory("coffee")}> <CoffeSvg /> </Circle>
            <Circle onClick={(e) =>setCategory("dessert")}> <CakeSvg />  </Circle>
            
            

        </CategoriesContainer> 
    )
}

export default Categories;