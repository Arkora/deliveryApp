import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FoodForm from '../components/FoodForm'
import { useSelector,useDispatch} from "react-redux";
import { resetIngrendients } from '../redux/actions/Actions';
import AdminPanel from '../components/AdminPanel';
import axios from 'axios';





const FormSection = styled.div`
    height: 80vh;
    width: max-content;
    background-color: #3d5a80;
    display: flex;
    margin :auto;
    margin-top: 20px;
`

const PreviewSection = styled.div`
    height: 100vh;
    width: max-content;
`


function FoodUpload() {

    const [food, setFood] = useState({})
    const [isClicked,setIsClicked] = useState(false);
    const ingrendients = useSelector(
        (state) => state.ingrendientsReducer.ingrendients
      );

    const dispatch = useDispatch(); 

    const postFood = async () =>{
        const response = await axios.post("http://localhost:8000/foods/upload",food) 
            .catch((err) =>{
                console.log(err)
            })

            alert(response.data)
            if(response.status === 201){
                dispatch(resetIngrendients())
                setFood({})
            }
    }
    
    useEffect(() =>{              
        if(isClicked){
         postFood()
         setIsClicked(false)
        }
        
    },[isClicked,food])  

    return (
        <div>
        <AdminPanel />
            <FormSection>
                <FoodForm setFood={setFood} ingrendients={ingrendients} setIsClicked={setIsClicked} ></FoodForm>
            </FormSection>
            
        
        </div>
    )
}

export default FoodUpload
