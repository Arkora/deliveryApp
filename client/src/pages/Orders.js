import {Main,OuterContainer,InnerContainer,HeaderContainer} from '../components/MainContainer'
import Header from '../components/nav/Header'
import React,{useState,useEffect} from 'react';

import Basket from '../components/cart/Basket';


const Orders = () => {
  const [category,setCategory] = useState("")
  const [search,setSearch] = useState("")
  
    return(
        <OuterContainer>       
          <Main>
            <InnerContainer>
              <HeaderContainer>
                <Header  setCategory = {setCategory} setSearch = {setSearch}/>                
              </HeaderContainer>
              <Basket />                    
            </InnerContainer>        
          </Main>
        </OuterContainer>
        )
};

export default Orders;
