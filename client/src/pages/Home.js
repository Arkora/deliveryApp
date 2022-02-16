import {Main,OuterContainer,InnerContainer,HeaderContainer,ItemContainer,FoodContainer} from '../components/MainContainer'
import {Header} from '../components/Header'
import React from 'react';
import FoodItem from '../components/FoodItem';
import FoodList from '../components/FoodList';
// import Categories from './components/Categories';
import Categories from '../components/Categories';
import styled from 'styled-components';


const data = [{id:"1",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']},{id:"2",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']},{id:"3",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']},{id:"4",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']}];


const Home = () => {
    
    
    return(
        <OuterContainer>       
      <Main>
        <InnerContainer>
          <HeaderContainer>
            <Header />
            <Categories categories = {data}/>
          </HeaderContainer>
          <FoodContainer>
            <FoodList foods ={data} />
          </FoodContainer>
                 
        </InnerContainer>        
      </Main>
    </OuterContainer>
    );


}

export default Home;