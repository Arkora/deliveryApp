import styled from "styled-components";
import React, {useState,useEffect} from 'react';
import Basket from "./Basket";
import {House}  from "@styled-icons/bootstrap";
import {Basket3 as Basket2}  from "@styled-icons/bootstrap";
import { Link,Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


export const HeaderDiv = styled.div `
height: 30px;
width: 100%;
display: flex;
margin-bottom: 50px;
display: grid;
grid-template-columns: 0.5fr 3fr 0.5fr;
    
`


export const SearchBar = styled.input`
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;    font-size: 16px;
    border: none;
    font-style: italic;
    text-align: center;
    font-weight: 300;
    width: 400px;
    height: 25px;
    margin-left: auto;
    margin-right: auto;
    
`
export const MenuButton = styled.button`
    
    width: 50px;
    height: 45px;    
    border-radius: 3px; 
    background-color: #d8a28c;
    cursor: pointer;
`

export const BasketButton = styled.div`
    width: 50px;
    margin-left: auto;
    height: 45px;   
    border-radius: 3px; 
    background-color: #d8a28c;
    cursor: pointer;
    border: 1px solid black;
    a&:focus, a&:hover, a&:visited, a&:link, a&:active{
        color: black;
    }

`
export const BasketIcon = styled(Basket2)`
    width: 30px;
    height: 30px;
    margin-left: 10px;
    margin-top: 8px;
`

export const HomeIcon = styled(House)`
    width: 30px;
    height: 30px;
`

  const Orders = styled.div`
  height: 20px;
  width: 20px; 
  background-color: red;
  border-radius: 50%;
  margin-top: -60px;
  margin-left: 35px;
`
    


export const Quantity = styled.h5`
    color: #ffff;
    margin-left: 6px;
`







export const Header = ({setCategory,setSearch}) =>{



    const products = useSelector((state) => state.orderReducer.products);

    
    useEffect(() =>{
       
    },[products]);
  

    return(
        <HeaderDiv>
           <Link to="/" > <MenuButton  onClick={(e) =>setCategory("")}> <HomeIcon/> </MenuButton> </Link>  
            
            <SearchBar placeholder="Search"  onChange={(e) => setSearch(e.target.value)}/>             
          <Link to="/orders" > <BasketButton  >  <BasketIcon /> <Orders><Quantity>{products.length}</Quantity></Orders>  </BasketButton></Link>
        </HeaderDiv>
    );
}

export default Header;