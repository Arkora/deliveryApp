import React,{useState,useEffect} from 'react';
import {Main,OuterContainer,InnerContainer,HeaderContainer,FoodContainer} from '../components/MainContainer'
import Header from '../components/nav/Header'
import FoodList from '../components/foods/FoodList';
import Categories from '../components/nav/Categories';
import { fetchFoods, fetchFoodsByCategory,fetchFoodsBySearch } from '../api';


const Home = () => {

  const [food, setFood] = useState([])
  const [category,setCategory] = useState("")
  const [search,setSearch] = useState("")

  const fetchData = async () =>{
    try {
  
      const {data} = await fetchFoods()
      setFood(data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchByCategory = async () =>{
    try {
      const {data} = await fetchFoodsByCategory(category)
      setFood(data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchBySearch = async () =>{
    try {
      const {data} = await fetchFoodsBySearch(search)
      setFood(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!category && !search){
      fetchData()
    }else if(category && !search){
      fetchByCategory()
    }else{
      fetchBySearch()
    }
    
  },[category,search])
    
    
    return(
        <OuterContainer>       
      <Main>
        <InnerContainer>
          <HeaderContainer>
            <Header setCategory = {setCategory} setSearch = {setSearch} />
            <Categories setCategory = {setCategory} />
          </HeaderContainer>
          
          
            <FoodList foods = {food} />
          
               
        </InnerContainer>        
      </Main>
    </OuterContainer>
    );


}

export default Home;