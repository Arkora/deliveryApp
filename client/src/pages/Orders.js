import {Main,OuterContainer,InnerContainer,HeaderContainer,ItemContainer,FoodContainer} from '../components/MainContainer'
import {Header} from '../components/Header'
import React from 'react';
import FoodList from '../components/FoodList';
import Categories from '../components/Categories';
import styled from 'styled-components';
import Basket from '../components/Basket';


const Orders = () => {
    return(
        <OuterContainer>       
          <Main>
            <InnerContainer>
              <HeaderContainer>
                <Header />
                <Categories/>
              </HeaderContainer>
              <Basket>
        
              </Basket>
                     
            </InnerContainer>        
          </Main>
        </OuterContainer>
        )
};

export default Orders;
