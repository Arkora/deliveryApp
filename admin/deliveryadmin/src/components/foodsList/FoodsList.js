import React from 'react'
import { FoodContainer,Grid,Image,Ingrendients,FoodTitle } from './style'
import { Link } from 'react-router-dom'
import {deleteFood} from "../../api/index"
import { useNavigate} from "react-router-dom"



function FoodsList({ id,title,img,ingrendients,price }) {
    const navigate = useNavigate();
    const handleDelete = async (e) =>{
  
        try{
            if(window.confirm("Are you sure want to delete this item?")){
                await deleteFood(id)                 
                navigate("/")   
            }else{
                navigate("/")
            }
            
        }catch(error){
          console.log(error)
        }
      }
  return (
    <FoodContainer>
       <Link to={`/update${id}`}> <FoodTitle>{title}</FoodTitle> </Link>
        <Grid>
            <div>
            <Image src={img}></Image>
            </div>    
            <div>
                {ingrendients.map((item) =>{
                    return(  <Ingrendients> {item} </Ingrendients>)
                        
                })}                
            </div>
            <div>  
                <h3>{price}$</h3>   
                <button onClick={(e) => handleDelete()}>Delete Food</button>          
            </div>
        </Grid>
        
    </FoodContainer>
  )
}

export default FoodsList