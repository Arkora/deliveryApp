import styled from "styled-components";
import {Cart} from 'styled-icons/bootstrap'

export const Item = styled.div`
 
  background-color: #194a50;
  margin-top: 5px;
  color: #ffff;
`;

export const Grid = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  
  row-gap: 50px;
  `


export const TitleDiv = styled.div`
   font-weight: 600;
`


export const Image = styled.img`
    width: 150px;
    height: 150px;
`



export const IncreaseButton = styled.button`
  width: 25px;
  height: 25px;
  border: 2px solid;
  border-radius: 3px;
  margin: 5px;
  background-color: #d8a28c;
  cursor: pointer;
`;

export const DecreaseButton = styled.button`
  width: 25px;
  height: 25px;
  border: 2px solid;
  border-radius: 3px;
  margin: 5px;
  background-color: #d8a28c;
  cursor: pointer;
`;

export const Title = styled.h4`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
`

export const Ingrendients = styled.li`
    list-style: circle;    
    
`

export const QuantityInput = styled.input`
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
    margin-top: 5px;
    margin-left: 5px;
    font-size: 16px;  
    border:none;    
    text-align:center;
    font-weight:300;
    width: 25px;
    height: 25px;
`

export const CartIcon = styled(Cart)`
    
`

export const CartButton = styled.button`
    width: 25px;
  height: 25px;
  border: 2px solid;
  border-radius: 3px;
  margin: 5px;
  background-color: #d8a28c;
  cursor: pointer;
`