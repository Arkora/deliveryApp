import React from 'react'
import { FoodContainer,Grid,Image,Ingrendients,FoodTitle } from './style'
import { Link } from 'react-router-dom'



function FoodsList({ id,title,img,ingrendients,price }) {
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
            </div>
        </Grid>
        
    </FoodContainer>
  )
}

export default FoodsList