import axios from 'axios'
import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import AdminPanel from '../components/AdminPanel'
import FoodsList from '../components/FoodsList'
import { Search as SearchIcon} from '@styled-icons/bootstrap/Search'



const SearchbarSection = styled.div`
 height: 50px;
  margin-top: 10px;
  margin-left: 150%;
  grid-template-columns: 3fr 7fr;
  display: grid;
`

const Searchbar = styled.input`
  width:200px ;
  height:20px ;
`
const Search = styled(SearchIcon)`
  width:100px ;
  height:20px ;
`

const ContentSection = styled.div`
    height: 90vh;    
    background-color: #3256D4;
    width: 1000px;    
    position: absolute;    
    margin-left: 20%;
    margin-top: 20px;
    top:20px ;
    overflow-y: scroll;
    
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: 3fr 7fr;
    overflow:hidden;
   
`



function Foods() {

  const [foods,setFoods] = useState([]);

  const fetchData = async () =>{
    const response = await axios
    .get("http://localhost:8000/foods")
    .catch((err) =>{
      console.log(err);
      
    });
    setFoods(response.data);
    
    
  }

  


  useEffect(()=>{
    fetchData();   
  },[])

 
  
  

  return (

     
    <Grid>     
      <AdminPanel />
        
                
        <SearchbarSection >               
          <Searchbar />
          <Search />           
        </SearchbarSection> 

        
        <ContentSection>
          {foods.length === 0 ? 
            <div>
            <h4>Database dont return data</h4>
          </div>
          : foods.map((item) =>{
            return(<FoodsList
                  id={item._id}
                  title={item.title} 
                  img={item.img} 
                  ingrendients={item.ingrendients} 
                  price={item.pirce} />)
          })
          }        
        </ContentSection>  
        
    </Grid>
    
  )
}

export default Foods