import axios from 'axios'
import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components';
import AdminPanel from '../components/AdminPanel';
import FoodForm from '../components/FoodForm';
import { useDispatch,useSelector} from 'react-redux';
import { addIngrendient,resetIngrendients } from "../redux/actions/Actions";




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
const [buttonClicked,setButtonClicked] = useState(false)
const [isLoaded, setIsLoaded] = useState(false)


const dispatch = useDispatch();

const ingrendients = useSelector(
  (state) => state.ingrendientsReducer.ingrendients
  );


const fetchData = async () =>{
   const response = await axios.get(`http://localhost:8000/foods/${id}`)  
    .catch((err) =>{
      console.log(err);     
    });
    
    setFood(response.data)

    setTimeout(()=>{
        if(food === undefined){
          console.log(" ")
        }else{
          
          response.data.ingrendients.forEach(element =>{
            dispatch(addIngrendient(element))
          })
          
        }
        
        
    },10)

    clearTimeout()
    
    
        
}  


useEffect(() =>{     
   
    fetchData()    
    setIsLoaded(true)     
    dispatch(resetIngrendients())
},[])




  return (
    <div>
        <AdminPanel/>
        <FormSection>
          {/* { isLoaded === true ?
               <FoodForm 
                isLoaded={isLoaded}
                setIsLoaded= {setIsLoaded}
                food={food}
                ingrendients={ingrendients}
                setFood={setFood}
                setButtonClicked={setButtonClicked}
              />:
              <div>
               <h2>...Loading</h2> 
              </div>
          }      */}
          <FoodForm 
                isLoaded={isLoaded}
                setIsLoaded= {setIsLoaded}
                food={food}
                ingrendients={ingrendients}
                setFood={setFood}
                setButtonClicked={setButtonClicked}
              />      
        
         
        </FormSection>
    </div>
    
  )
}

export default FoodUpdate