import React,{useState,useEffect} from 'react';
import {Main,OuterContainer,InnerContainer,HeaderContainer,FoodContainer} from '../components/MainContainer'
import {Header} from '../components/Header'
import FoodList from '../components/FoodList';
import Categories from '../components/Categories';
import { fetchFoods, fetchFoodsByCategory,fetchFoodsBySearch } from '../api';



//const data = [{id:"1",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']},{id:"2",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']},{id:"3",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']},{id:"4",title: 'Pancake', img: 'https://images.pexels.com/photos/7144893/pexels-photo-7144893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',ingrendients:['salt','peper','oil']}];



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
          <FoodContainer>
            <FoodList foods = {food} />
          </FoodContainer>
                 
        </InnerContainer>        
      </Main>
    </OuterContainer>
    );


}

export default Home;