import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import AdminPanel from '../components/adminPanel/AdminPanel';
import Form from '../components/form/Form';
import { getFood } from '../api';





const FormSection = styled.div`
    height: 80vh;
    width: max-content;
    background-color: #3256D4;
    display: flex;
    margin :auto;
    margin-top: 20px;
`



function FoodUpdate() {

const {id}  = useParams();
const [food,setFood] = useState({});
const [isLoaded, setIsLoaded] = useState(false)

const fetchData = async () =>{
    try{
      const {data} = await getFood(id)
      setFood(data)
      setIsLoaded(true)
    }catch (error){
      console.log(error.message)
    }
     
  
}

useEffect(() => {
  fetchData()  
}, [])







  return (
    <div>
        <AdminPanel/>
        <FormSection>
          { isLoaded === true ?
               <Form 
                id={id}
                foodToUpload={food}
                
              />:
              <div>
               <h2>...Loading</h2> 
              </div>
          }     
              
        
         
        </FormSection>
    </div>
    
  )
}

export default FoodUpdate