import {Main,OuterContainer,InnerContainer,HeaderContainer} from '../components/MainContainer'
import {Header} from '../components/Header'
import React,{useState} from 'react';

import Basket from '../components/Basket';


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
              <Basket>
        
              </Basket>
                     
            </InnerContainer>        
          </Main>
        </OuterContainer>
        )
};

export default Orders;
