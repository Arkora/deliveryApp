import React from "react";
import styled from "styled-components";
import { ReactComponent as CoffeSVG } from '../assets/coffeecup.svg';
import { ReactComponent as CakeSVG } from '../assets/cake.svg';
import { ReactComponent as SteakSVG } from '../assets/steak.svg';
import { ReactComponent as PizzaSVG } from '../assets/pizza.svg';
import { ReactComponent as SoupSVG } from '../assets/soup.svg';


const CategoriesContainer = styled.div`
    display: flex;
`

const CoffeSvg = styled(CoffeSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`
const CakeSvg = styled(CakeSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`

const SteakSvg = styled(SteakSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`
const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius:35px;
    background-color: #ffff;
    margin: auto;
    cursor: pointer;
`
const PizzaSvg = styled(PizzaSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`
const SoupSvg = styled(SoupSVG)`
    width: 50px;
    height: 50px;
    margin: 3px;
`

const clicked = () => {
    console.log("Clicked")
}

const Categories = () =>{
    
    
    
    return(
        <CategoriesContainer>
            <Circle onClick={clicked} > <SteakSvg /> </Circle>
            <Circle> <PizzaSvg />  </Circle>
            <Circle> <SoupSvg />  </Circle>
            <Circle> <CoffeSvg /> </Circle>
            <Circle> <CakeSvg />  </Circle>
            
            

        </CategoriesContainer> 
    )
}

export default Categories;